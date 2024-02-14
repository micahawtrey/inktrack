from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from .utils import sig_to_image, model_to_pdf
from .serializers import ConsentSerializer

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from django.http import HttpResponse
from django.template.loader import render_to_string
from weasyprint import HTML
from io import BytesIO



@api_view(["POST"])
def consent_form(request):
    if request.method == "POST":
        serializer = ConsentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            obj = serializer.data
            html_string = render_to_string("./templates/documents/consent_pdf.html", obj)
            html = HTML(string=html_string)
            pdf_bytes = html.write_pdf()
            pdf_file = BytesIO(pdf_bytes)
            pdf_file.seek(0)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
