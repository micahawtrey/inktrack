from django.urls import path
from documents.views import consent_form
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("consent/", consent_form, name="consent_form"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
