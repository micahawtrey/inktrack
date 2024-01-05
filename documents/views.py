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
            for key, data in form.cleaned_data.items():
                if type(data) == list:
                    data = sig_to_image(data)
                fields[key] = data
            # Creates a new Consent object that has all the
            # fields from the form dictionary
            new_consent = Consent(
                front_id=fields.get('front_id'),
                back_id=fields.get('back_id'),
                first_name=fields.get('first_name'),
                last_name=fields.get('last_name'),
                preferred_pronouns=fields.get('preferred_pronouns'),
                age=fields.get('age'),
                birth_date=fields.get('birth_date'),
                phone_number=fields.get('phone_number'),
                email=fields.get('email'),
                address_line_1=fields.get('address_line_1'),
                address_line_2=fields.get('address_line_2'),
                city=fields.get('city'),
                state_province=fields.get('state_province'),
                postal_zip_code=fields.get('postal_zip_code'),
                tattoo_description=fields.get('tattoo_description'),
                tattoo_placement=fields.get('tattoo_placement'),
                connection=fields.get('connection'),
                under_influence=fields.get('under_influence'),
                pregnant_or_nursing=fields.get('pregnant_or_nursing'),
                communicable_disease=fields.get('communicable_disease'),
                skin_conditions=fields.get('skin_conditions'),
                medical_history=fields.get('medical_history'),
                permanent=fields.get('permanent'),
                permanent_init=fields.get('permanent_init'),
                social_media_perm=fields.get('social_media_perm'),
                social_media_perm_init=fields.get('social_media_perm_init'),
                refund=fields.get('refund'),
                refund_init=fields.get('refund_init'),
                allergen_disclosure=fields.get('allergen_disclosure'),
                allergen_disclosure_init=fields.get('allergen_disclosure_init'),
                aftercare=fields.get('aftercare'),
                aftercare_init=fields.get('aftercare_init'),
                infection=fields.get('infection'),
                infection_init=fields.get('infection_init'),
                compensation=fields.get('compensation'),
                compensation_init=fields.get('compensation_init'),
                allergen_risk=fields.get('allergen_risk'),
                allergen_risk_init=fields.get('allergen_risk_init'),
                accurate_info=fields.get('accurate_info'),
                accurate_info_init=fields.get('accurate_info_init'),
                not_minor=fields.get('not_minor'),
                not_minor_init=fields.get('not_minor_init'),
                signed_date=fields.get('signed_date'),
                signature=fields.get('signature'),
                full_name=fields.get('full_name'),
                general_date=fields.get('general_date'),
                general_sig=fields.get('general_sig'),
                aftercare_sig=fields.get('aftercare_sig'),
                aftercare_date=fields.get('aftercare_date'),
                artist_sig=fields.get('artist_sig'),
                artist_date_signed=fields.get('artist_date_signed'),
                artist_name=fields.get('artist_name'),
                artist_date=fields.get('artist_date'),
                needle_info=fields.get('needle_info'),
            )
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
