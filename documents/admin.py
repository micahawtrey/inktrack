from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(ConsentFormPDF)
class ConsentFormPDFAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "pdf_form",
        "id",
    ]

@admin.register(Consent)
class ConsentFormAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "id",
    ]
