
from rest_framework import serializers
from .models import Project, Education, Certification, ContactMessage


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = "__all__"

class ContactMessageSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = ContactMessage 
        fields = ["name", "email", "message"]