from django.db import models

# Create your models here.
class Project(models.Model):
    title=models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    description=models.TextField()
    technologies = models.CharField(max_length=100)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    image=models.ImageField(upload_to="projects/", blank=True, null=True)

    def __str__(self):
        return self.title

class Education(models.Model):
    title = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    level = models.CharField(max_length=100)
    description = models.TextField()
    document = models.FileField(
        upload_to="education/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title


class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    certificate = models.FileField(
        upload_to="certificates/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

