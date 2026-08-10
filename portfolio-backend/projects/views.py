
from django.http import HttpResponse
from rest_framework import generics
import requests
from django.conf import settings

from .models import Project, Education, Certification, ContactMessage

from .serializers import (
    ProjectSerializer,
    EducationSerializer,
    CertificationSerializer,
    ContactMessageSerializer,
)


class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class EducationListAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class CertificationListAPIView(generics.ListAPIView):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer


class ContactMessageCreateAPIView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):

        # Save the message to the database
        contact_message = serializer.save()

        # Send the message through Resend
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {settings.RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": "Portfolio <onboarding@resend.dev>",
                "to": ["clintonjuma4400@gmail.com"],
                "subject": f"New Portfolio Message from {contact_message.name}",
                "html": f"""
                    <h2>New message from your portfolio</h2>

                    <p><strong>Name:</strong> {contact_message.name}</p>

                    <p><strong>Email:</strong> {contact_message.email}</p>

                    <p><strong>Message:</strong></p>

                    <p>{contact_message.message}</p>
                """,
            },
        )

        # Show an error in the Django terminal if Resend rejects the email
        if response.status_code >= 400:
            print("Resend email error:", response.text)


def home(request):
    return HttpResponse("Welcome to my Portfolio Backend!")

