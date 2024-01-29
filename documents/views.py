from django.shortcuts import render, redirect, get_object_or_404
from documents.forms import ConsentForm
from documents.models import *
from django.http import HttpResponse, FileResponse
from django.template.loader import get_template
import io
import os
from xhtml2pdf import pisa
from .utils import sig_to_image, model_to_pdf


def consent_form(request):
    if request.method == "POST":
        form = ConsentForm(request.POST, request.FILES)
        if form.is_valid():
            # Creates a dictionary containing all of the
            # fields from the form, and converts the ones
            # that are signatures into images
            fields = {}
            full_name = form.cleaned_data['full_name']
            for key, data in form.cleaned_data.items():
                if type(data) == list:
                    print(data)
                    data = sig_to_image(data, key, full_name)
                fields[key] = data
            # Creates a new Consent object that has all the
            # fields from the form dictionary
            new_consent = Consent(**fields)
            new_consent.save()
            return redirect('consentpdf', id=new_consent.id)
        else:
            print(form.errors)

    else:
        form = ConsentForm()
    context = {
        "form": form,
    }
    return render(request, "documents/consent_form.html", context)

def consentpdf(request, id):
    return model_to_pdf(Consent, id, 'documents/consent_pdf.html')

def minor_consent(request):
    if request.method == "POST":
        form = MinorConsentForm(request.POST, request.FILES)
        fields = {}
        full_name = f"{form.cleaned_data['first']} {form.cleaned_data['last']}"
        for key, data in form.cleaned_data.items():
                if type(data) == list:
                    print(data)
                    data = sig_to_image(data, key, full_name)
                fields[key] = data
        if form.is_valid():
            new_minor_consent = MinorConsent.objects.create(**fields)
            return HttpResponse('All done')
