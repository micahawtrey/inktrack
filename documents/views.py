from django.shortcuts import render, redirect, get_object_or_404
from documents.models import *
from django.http import HttpResponse, JsonResponse
from .utils import sig_to_image, model_to_pdf
from django.views.decorators.http import require_http_methods
import json
from .encoders import ConsentEncoder


@require_http_methods(["POST"])
def consent_form(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(data)
        new_consent = Consent.objects.create(**data)

# def minor_consent(request):
#     if request.method == "POST":
#         form = MinorConsent(request.POST, request.FILES)
#         fields = {}
#         full_name = f"{form.cleaned_data['first']} {form.cleaned_data['last']}"
#         for key, data in form.cleaned_data.items():
#                 if type(data) == list:
#                     print(data)
#                     data = sig_to_image(data, key, full_name)
#                 fields[key] = data
#         if form.is_valid():
#             new_minor_consent = MinorConsent.objects.create(**fields)
#             return HttpResponse('All done')
