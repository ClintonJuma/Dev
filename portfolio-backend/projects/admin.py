from django.contrib import admin

# Register your models here.
from .models import Project, Education, Certification, ContactMessage

admin.site.register(Project)
admin.site.register(Education)
admin.site.register(Certification)
admin.site.register(ContactMessage)