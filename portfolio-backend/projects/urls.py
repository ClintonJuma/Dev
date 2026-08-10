
from django.urls import path

from .views import (
    ProjectListAPIView,
    EducationListAPIView,
    CertificationListAPIView,
    ContactMessageCreateAPIView,
)


urlpatterns = [
    path("", ProjectListAPIView.as_view(), name="project-list"),
    path("education/", EducationListAPIView.as_view(), name="education-list"),
    path("certifications/", CertificationListAPIView.as_view(), name="certification-list"),
    path("contact/", ContactMessageCreateAPIView.as_view(),name="contact-message")
]

