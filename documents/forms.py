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

# class ConsentForm(forms.Form):
#     front_id = forms.FileField()
#     back_id = forms.FileField()
#     first_name = forms.CharField(max_length=30)
#     last_name = forms.CharField(max_length=30)
#     preferred_pronouns = forms.ChoiceField(choices=[("he", "he/him"),("she", "she/her"),("they", "they/them"),("other", "other")], widget=forms.RadioSelect)
#     age = forms.IntegerField(validators = [MaxValueValidator(120), MinValueValidator(15)])
#     birth_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}))
#     phone_number = PhoneNumberField(region="US")
#     email = forms.EmailField(required=False)
#     address_line_1 = forms.CharField(max_length=100)
#     address_line_2 = forms.CharField(max_length=100, required=False)
#     city = forms.CharField(max_length=100)
#     state_province = USStateField()
#     postal_zip_code = USZipCodeField()
#     tattoo_description = forms.CharField(max_length=500)
#     tattoo_placement = forms.CharField(max_length=200)
#     connection = forms.CharField(max_length=500)
#     under_influence = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
#     pregnant_or_nursing = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], required=False, widget=forms.RadioSelect)
#     communicable_disease = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
#     skin_conditions = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
#     medical_history = forms.CharField(widget=forms.Textarea, max_length=1000, required=False)
#     permanent = forms.BooleanField()
#     permanent_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     social_media_perm = forms.BooleanField()
#     social_media_perm_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     refund = forms.BooleanField()
#     refund_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     allergen_disclosure = forms.BooleanField()
#     allergen_disclosure_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     aftercare = forms.BooleanField()
#     aftercare_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     infection = forms.BooleanField()
#     infection_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     compensation = forms.BooleanField()
#     compensation_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     allergen_risk = forms.BooleanField()
#     allergen_risk_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     accurate_info = forms.BooleanField()
#     accurate_info_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     not_minor = forms.BooleanField()
#     not_minor_init = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
#     signed_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}))
#     signature = forms.CharField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 600, 'height': 100}))

#     def __init__(self, *args, **kwargs):
#         super(ConsentForm, self).__init__(*args, **kwargs)
#         # Removes the initial empty choice from the fields
#         self.fields['preferred_pronouns'].empty_label = None
#         self.fields['under_influence'].empty_label = None
#         self.fields['pregnant_or_nursing'].empty_label = None
#         self.fields['communicable_disease'].empty_label = None
#         self.fields['skin_conditions'].empty_label = None
