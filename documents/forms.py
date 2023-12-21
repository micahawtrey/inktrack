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
    front_id = forms.ImageField()
    back_id = forms.ImageField()

    # Contact info
    first_name = forms.CharField(label=_("First Name"), max_length=30)
    last_name = forms.CharField(label=_("Last Name"), max_length=30)
    preferred_pronouns = forms.ChoiceField(label=_("Preferred Pronouns"), choices=[("he", "he/him"),("she", "she/her"),("they", "they/them"),("other", "other")], widget=forms.RadioSelect)
    age = forms.IntegerField(validators = [MaxValueValidator(120), MinValueValidator(15)])
    birth_date = forms.DateField(label=_("Date of Birth"), widget=forms.DateInput(attrs={'type': 'date', 'max': datetime.now().date()}))
    phone_number = PhoneNumberField(label=_("Phone Number"),region="US")
    email = forms.EmailField(required=False)

    # address
    address_line_1 = forms.CharField(label=_("Street Address"), max_length=100)
    address_line_2 = forms.CharField(label=_("Street Address Line 2"), max_length=100, required=False)
    city = forms.CharField(max_length=100)
    state_province = USStateField(label=_("State / Province"))
    postal_zip_code = USZipCodeField(label=_("Postal / Zip Code"))

    # misc info
    tattoo_description = forms.CharField(label=_("Brief Description of the tattoo:"), max_length=500)
    tattoo_placement = forms.CharField(label=_("Placement of tattoo"), max_length=200)
    how_did_you_hear = forms.CharField(label=_("How did you hear about us?"), max_length=500)

    # Pre-procedure questionairre
    under_influence = forms.ChoiceField(label=_("Are you under the influence of drugs or alcohol?"), choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    pregnant_or_breastfeeding = forms.ChoiceField(label=_("FEMALE ONLY: Are you pregnant or nursing?"), choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
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
    signature = JSignatureField(widget=JSignatureWidget(jsignature_attrs={'UndoButton': True, "ResetButton": True,}))
