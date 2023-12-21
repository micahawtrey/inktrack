from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator
from phonenumber_field.formfields import PhoneNumberField
from localflavor.us.forms import USStateField, USZipCodeField
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from jsignature.forms import JSignatureField
from jsignature.widgets import JSignatureWidget


class ConsentForm(forms.Form):
    # Id photos will need camera access
    front_id = forms.FileField()
    back_id = forms.FileField()

    # Contact info
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    preferred_pronouns = forms.ChoiceField(choices=[("he", "he/him"),("she", "she/her"),("they", "they/them"),("other", "other")], widget=forms.RadioSelect)
    age = forms.IntegerField(validators = [MaxValueValidator(120), MinValueValidator(15)])
    birth_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}))
    phone_number = PhoneNumberField(region="US")
    email = forms.EmailField(required=False)

    # address
    address_line_1 = forms.CharField(max_length=100)
    address_line_2 = forms.CharField(max_length=100, required=False)
    city = forms.CharField(max_length=100)
    state_province = USStateField()
    postal_zip_code = USZipCodeField()

    # misc info
    tattoo_description = forms.CharField(max_length=500)
    tattoo_placement = forms.CharField(max_length=200)
    connection = forms.CharField(max_length=500)

    # Pre-procedure questionairre
    under_influence = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    pregnant_or_nursing = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    communicable_disease = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    skin_conditions = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    medical_history = forms.CharField(max_length=1000, required=False)

    # Acknowledgement and waiver
    permanent = forms.BooleanField()
    permanent_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    social_media_perm = forms.BooleanField()
    social_media_perm_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    refund = forms.BooleanField()
    refund_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    allergen_disclosure = forms.BooleanField()
    allergen_disclosure_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    aftercare = forms.BooleanField()
    aftercare_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    infection = forms.BooleanField()
    infection_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    compensation = forms.BooleanField()
    compensation_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    allergen_risk = forms.BooleanField()
    allergen_risk_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    accurate_info = forms.BooleanField()
    accurate_info_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))
    not_minor = forms.BooleanField()
    not_minor_init = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, 'ResetButton': True, 'width': 100, 'height': 80}))

    # signature
    signed_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}))
    signature = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True, 'width': 600, 'height': 100}))
