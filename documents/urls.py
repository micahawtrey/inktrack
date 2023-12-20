from django.urls import path
from documents.views import consent_form

urlpatterns = [
    path("", consent_form, name="consent_form"),
]
