from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator
from phonenumber_field.formfields import PhoneNumberField
from localflavor.us.forms import USStateField, USZipCodeField


class ConsentForm(forms.Form):
    # Id photos will need camera access
    # front_id = forms.ImageField()
    # back_id = forms.ImageField()

    # Contact info
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    preferred_pronouns = forms.ChoiceField(choices=[("he", "he/him"),("she", "she/her"),("they", "they/them"),("other", "other")], widget=forms.RadioSelect)
    age = forms.IntegerField(validators = [MaxValueValidator(120), MinValueValidator(15)])
    birth_date = forms.DateField()
    phone_number = PhoneNumberField(region="US")
    email = forms.EmailField()

    # address
    address_line_1 = forms.CharField(max_length=100)
    address_line_2 = forms.CharField(max_length=100, required=False)
    city = forms.CharField(max_length=100)
    state_province = USStateField()
    postal_zip_code = USZipCodeField()

    # misc info
    tattoo_description = forms.CharField(max_length=500)
    tattoo_placement = forms.CharField(max_length=200)
    how_did_you_hear = forms.CharField(max_length=500)

    # Pre-procedure questionairre
    under_influence = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    pregnant_or_breastfeeding = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    communicable_disease = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    skin_conditions = forms.ChoiceField(choices=[("Yes", "Yes"),("No", "No")], widget=forms.RadioSelect)
    medical_history = forms.CharField(max_length=1000, required=False)

    # Acknowledgement and waiver
    permanent = forms.BooleanField()
    social_media_perm = forms.BooleanField()
    refund = forms.BooleanField()
    allergen_disclosure = forms.BooleanField()
    aftercare = forms.BooleanField()
    infection = forms.BooleanField()
    compensation = forms.BooleanField()
    allergen_risk = forms.BooleanField()
    accurate_info = forms.BooleanField()
    not_minor = forms.BooleanField()

    # signature
    signed_date = forms.DateField()
    signature = forms.CharField()
