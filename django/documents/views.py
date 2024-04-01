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
from django.core.files.uploadedfile import InMemoryUploadedFile

@api_view(["POST"])
def consent_form(request):
    if request.method == "POST":
        serializer = ConsentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            new_client = Client.objects.create(
                first_name = serializer.data["first_name"],
                last_name = serializer.data["last_name"],
                preferred_pronouns = serializer.data["preferred_pronouns"],
                age = serializer.data["age"],
                birth_date = serializer.data["birth_date"],
                phone_number = serializer.data["phone_number"],
                email = serializer.data["email"]
            )

            obj = serializer.data
            print(obj)
            html_string = render_to_string(
                "../templates/documents/consent_pdf.html",
                context={"obj": obj, "BASE_URL": request.build_absolute_uri("/")})
            html = HTML(string=html_string)
            pdf_bytes = html.write_pdf()
            pdf_file = BytesIO(pdf_bytes)
            pdf_file.seek(0)

            new_consent_pdf = ConsentPDF.objects.create(
                client = new_client,
                pdf = InMemoryUploadedFile(
                    pdf_file,
                    None,
                    'consent.pdf',
                    'application/pdf',
                    pdf_file.tell(),
                    None
                )
            )

            signatures = [
                ["permanent_init", "permanent_init_time_stamp"],
                ["social_media_perm_init", "social_media_perm_init_time_stamp"],
                ["refund_init", "refund_init_time_stamp"],
                ["allergen_disclosure_init", "allergen_disclosure_init_time_stamp"],
                ["aftercare_init", "aftercare_init_time_stamp"],
                ["infection_init", "infection_init_time_stamp"],
                ["compensation_init", "compensation_init_time_stamp"],
                ["allergen_risk_init", "allergen_risk_init_time_stamp"],
                ["accurate_info_init", "accurate_info_init_time_stamp"],
                ["not_minor_init", "not_minor_init_time_stamp"],
                ["signature", "signature_time_stamp"],
                ["general_sig", "general_sig_time_stamp"],
                ["aftercare_sig", "aftercare_sig_time_stamp"],
                ["artist_sig", "artist_sig_time_stamp"],
            ]

            for signature in signatures:
                Signature.objects.create(
                    signature_image = serializer.data[signature[0]],
                    signed_at = serializer.data[signature[1]],
                    consent_pdf = new_consent_pdf,
                    client = new_client
                )

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
