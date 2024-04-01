from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Consent)
class ConsentFormAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "id",
    ]

admin.site.register(ConsentPDF)

admin.site.register(Client)

admin.site.register(Signature)
