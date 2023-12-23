from django.db import models
from localflavor.us.models import USStateField, USZipCodeField
from phonenumber_field.modelfields import PhoneNumberField
from jsignature.fields import JSignatureField



# Create your models here.
class ConsentFormPDF(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    pdf_form = models.FileField()

class Consent(models.Model):
    # Id photos will need camera access
    front_id = models.FileField()
    back_id = models.FileField()

    # Contact info
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    preferred_pronouns = models.CharField(max_length=10)
    age = models.IntegerField()
    birth_date = models.DateField()
    phone_number = PhoneNumberField()
    email = models.EmailField(blank=True, null=True)

    # address
    address_line_1 = models.CharField(max_length=100)
    address_line_2 = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100)
    state_province = USStateField()
    postal_zip_code = USZipCodeField()

    # misc info
    tattoo_description = models.CharField(max_length=500)
    tattoo_placement = models.CharField(max_length=200)
    connection = models.CharField(max_length=500)

    # Pre-procedure questionairre
    under_influence = models.CharField(max_length=10)
    pregnant_or_nursing = models.CharField(max_length=10)
    communicable_disease = models.CharField(max_length=10)
    skin_conditions = models.CharField(max_length=10)
    medical_history = models.CharField(max_length=1000, blank=True, null=True)

    # Acknowledgement and waiver
    permanent = models.BooleanField()
    permanent_init = JSignatureField()
    social_media_perm = models.BooleanField()
    social_media_perm_init = JSignatureField()
    refund = models.BooleanField()
    refund_init = JSignatureField()
    allergen_disclosure = models.BooleanField()
    allergen_disclosure_init = JSignatureField()
    aftercare = models.BooleanField()
    aftercare_init = JSignatureField()
    infection = models.BooleanField()
    infection_init = JSignatureField()
    compensation = models.BooleanField()
    compensation_init = JSignatureField()
    allergen_risk = models.BooleanField()
    allergen_risk_init = JSignatureField()
    accurate_info = models.BooleanField()
    accurate_info_init = JSignatureField()
    not_minor = models.BooleanField()
    not_minor_init = JSignatureField()

    # signature
    signed_date = models.DateField()
    signature = JSignatureField()
