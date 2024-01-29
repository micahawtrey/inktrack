from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator
from phonenumber_field.formfields import PhoneNumberField
from localflavor.us.forms import USStateField, USStateSelect, USZipCodeField
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from jsignature.forms import JSignatureField
from jsignature.widgets import JSignatureWidget
from .models import *


class ConsentForm(forms.ModelForm):
    class Meta:
        model = ConsentFormModel
        fields = '__all__'
        widgets = {
            'preferred_pronouns': forms.RadioSelect(choices=[("he/him", "he/him"),("she/her", "she/her"),("they/them", "they/them"),("other", "other")]),
            'birth_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'under_influence': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'pregnant_or_nursing': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'communicable_disease': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'skin_conditions': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'medical_history': forms.Textarea,
            'permanent_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'social_media_perm_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'refund_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'allergen_disclosure_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'aftercare_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'infection_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'compensation_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'allergen_risk_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'accurate_info_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'not_minor_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'signed_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'signature': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'general_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'general_sig': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'aftercare_sig': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'aftercare_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'artist_sig': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'artist_date_signed': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'artist_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'needle_info': forms.Textarea,
            }

    def __init__(self, *args, **kwargs):
        super(ConsentForm, self).__init__(*args, **kwargs)
        # Removes the initial empty choice from the fields
        self.fields['preferred_pronouns'].empty_label = None
        self.fields['under_influence'].empty_label = None
        self.fields['pregnant_or_nursing'].empty_label = None
        self.fields['communicable_disease'].empty_label = None
        self.fields['skin_conditions'].empty_label = None

class MinorConsentForm(forms.ModelForm):
    class Meta:
        model = MinorConsent
        fields = '__all__'
        widgets = {
            'preferred_pronouns': forms.RadioSelect(choices=[("parent", ""),("she/her", "she/her"),("they/them", "they/them"),("other", "other")]),
            'birth_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'under_influence': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'pregnant_or_nursing': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'communicable_disease': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'skin_conditions': forms.RadioSelect(choices=[("Yes", "Yes"), ("No", "No")]),
            'medical_history': forms.Textarea,
            'permanent_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'social_media_perm_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'refund_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'allergen_disclosure_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'aftercare_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'infection_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'compensation_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'allergen_risk_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'accurate_info_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'not_minor_init': JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}),
            'signed_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'signature': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'general_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'general_sig': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'aftercare_sig': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'aftercare_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'artist_sig': JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 350, 'height': 100}),
            'artist_date_signed': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'artist_date': forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}),
            'needle_info': forms.Textarea,
            }

    def __init__(self, *args, **kwargs):
        super(ConsentForm, self).__init__(*args, **kwargs)
        # Removes the initial empty choice from the fields
        self.fields['preferred_pronouns'].empty_label = None
        self.fields['under_influence'].empty_label = None
        self.fields['pregnant_or_nursing'].empty_label = None
        self.fields['communicable_disease'].empty_label = None
        self.fields['skin_conditions'].empty_label = None
