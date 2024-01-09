from datetime import timezone
from typing import Any
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import DetailView

from documents.models import Consent

import functools
import ssl
from django.conf import settings
from django_weasyprint import WeasyTemplateResponseMixin
from django_weasyprint.views import WeasyTemplateResponse
from django_weasyprint.utils import django_url_fetcher

# Create your views here.
class ConsentPdf(DetailView):
    template_name = 'pdfcreation/consent_pdf.html'

    def get_object(self):
        id_ = self.kwargs.get('id')
        obj = get_object_or_404(Consent, id=id_)
        return obj

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        obj = self.get_object()
        context['obj'] = obj
        return context

def custom_url_fetcher(url, *args, **kwargs):
    # rewrite requests for CDN URLs to file path in STATIC_ROOT to use local file
    static_storage_url = 'static/'
    if url.startswith(static_storage_url):
        url = 'file://' + url.replace(static_storage_url, settings.STATIC_URL)
    return django_url_fetcher(url, *args, **kwargs)

class CustomWeasyTemplateResponse(WeasyTemplateResponse):
    # customized response class to pass a kwarg to URL fetcher
    def get_url_fetcher(self):
        # disable host and certificate check
        context = ssl.create_default_context()
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE
        return functools.partial(custom_url_fetcher, ssl_context=context)

class PrintView(WeasyTemplateResponseMixin, ConsentPdf):
    # output of ConsentPdf rendered as PDF with hardcoded CSS
    # pdf_stylesheets = [
    #     settings.STATIC_ROOT + '\\css\\pdfcreation.css',
    # ]
    # show pdf in-line (default: True, show download dialog)
    pdf_attachment = False
    # custom response class to configure url-fetcher
    response_class = CustomWeasyTemplateResponse

class DownloadView(WeasyTemplateResponseMixin, ConsentPdf):
    # suggested filename (is required for attachment/download!)
    pdf_filename = 'consent.pdf'

class DynamicNameView(WeasyTemplateResponseMixin, ConsentPdf):
    # dynamically generate filename
    def get_pdf_filename(self):
        return 'consent-{at}.pdf'.format(
            at=timezone.now().strftime('%Y%m%d-%H%M'),
        )
