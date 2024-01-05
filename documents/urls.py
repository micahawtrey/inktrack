from django.urls import path
from documents.views import consent_form, consentpdf

urlpatterns = [
    path("", consent_form, name="consent_form"),
    path('pdf/<int:id>/', consentpdf, name='consentpdf'),
]
