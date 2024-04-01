from django.db import models
from localflavor.us.models import USStateField, USZipCodeField
from phonenumber_field.modelfields import PhoneNumberField
from jsignature.fields import JSignatureField
import uuid

class Consent(models.Model):
    # Id photos will need camera access
    front_id = models.FileField(upload_to='temp_id_photos/')
    back_id = models.FileField(upload_to='temp_id_photos/')

    # Contact info
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    preferred_pronouns = models.CharField(max_length=30)
    age = models.IntegerField()
    birth_date = models.DateField()
    phone_number = models.CharField(max_length=20)
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
    pregnant_or_nursing = models.CharField(max_length=10, blank=True, null=True)
    communicable_disease = models.CharField(max_length=10)
    skin_conditions = models.CharField(max_length=10)
    medical_history = models.CharField(max_length=1000, blank=True, null=True)

    # Acknowledgement and waiver
    permanent = models.BooleanField()
    permanent_init = models.ImageField(upload_to='temp_signatures/')
    social_media_perm = models.BooleanField()
    social_media_perm_init = models.ImageField(upload_to='temp_signatures/')
    refund = models.BooleanField()
    refund_init = models.ImageField(upload_to='temp_signatures/')
    allergen_disclosure = models.BooleanField()
    allergen_disclosure_init = models.ImageField(upload_to='temp_signatures/')
    aftercare = models.BooleanField()
    aftercare_init = models.ImageField(upload_to='temp_signatures/')
    infection = models.BooleanField()
    infection_init = models.ImageField(upload_to='temp_signatures/')
    compensation = models.BooleanField()
    compensation_init = models.ImageField(upload_to='temp_signatures/')
    allergen_risk = models.BooleanField()
    allergen_risk_init = models.ImageField(upload_to='temp_signatures/')
    accurate_info = models.BooleanField()
    accurate_info_init = models.ImageField(upload_to='temp_signatures/')
    not_minor = models.BooleanField()
    not_minor_init = models.ImageField(upload_to='temp_signatures/')

    # signature
    signed_date = models.DateField()
    signature = models.ImageField(upload_to='temp_signatures/')

    # General Agreement
    full_name = models.CharField(max_length=100)
    general_date = models.DateField()
    general_sig = models.ImageField(upload_to='temp_signatures/')

    # Aftercare instructions
    aftercare_sig = models.ImageField(upload_to='temp_signatures/')
    aftercare_date = models.DateField()
    artist_sig = models.ImageField(upload_to='temp_signatures/')
    artist_date_signed = models.DateField()

    # For artist only
    artist_name = models.CharField(max_length=100)
    artist_date = models.DateField()
    needle_info = models.CharField(max_length=1000)

    # Signature Time Stamps
    permanent_init_time_stamp = models.DateTimeField()
    social_media_perm_init_time_stamp = models.DateTimeField()
    refund_init_time_stamp = models.DateTimeField()
    allergen_disclosure_init_time_stamp = models.DateTimeField()
    aftercare_init_time_stamp = models.DateTimeField()
    infection_init_time_stamp = models.DateTimeField()
    compensation_init_time_stamp = models.DateTimeField()
    allergen_risk_init_time_stamp = models.DateTimeField()
    accurate_info_init_time_stamp = models.DateTimeField()
    not_minor_init_time_stamp = models.DateTimeField()
    signature_time_stamp = models.DateTimeField()
    general_sig_time_stamp = models.DateTimeField()
    aftercare_sig_time_stamp = models.DateTimeField()
    artist_sig_time_stamp = models.DateTimeField()

class MinorConsent(models.Model):
    # identifying info
    guardianship = models.CharField(max_length=100)
    first = models.CharField(max_length=30)
    last = models.CharField(max_length=30)
    age = models.IntegerField()
    birth_date = models.DateField()
    phone_number = PhoneNumberField()
    email = models.EmailField()

    # address
    address_line_1 = models.CharField(max_length=100)
    address_line_2 = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100)
    state_province = USStateField()
    postal_zip_code = USZipCodeField()

    # tattoo desc
    tattoo_desc = models.CharField(max_length=500)
    tattoo_place = models.CharField(max_length=100)

    # signatures
    signature = models.ImageField(upload_to="temp_signatures/")
    signed_date = models.DateField()

    # id photos
    front_id = models.FileField(upload_to='temp_id_photos/')
    back_id = models.FileField(upload_to='temp_id_photos/')

    def __str__(self):
        return f"{self.first} {self.last}"

class Client(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    preferred_pronouns = models.CharField(max_length=30)
    age = models.IntegerField()
    birth_date = models.DateField()
    phone_number = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return f"{self.id}_{self.last_name}_{self.first_name}"

class ConsentPDF(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_on = models.DateField(auto_now_add=True)
    pdf = models.FileField(upload_to="consent_pdfs/")

    client = models.ForeignKey(
        Client,
        related_name="consent_pdfs",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.client.last_name}_{self.client.first_name}_{self.created_on}_{self.id}"

class Signature(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    signature_image = models.ImageField(upload_to='consent_pdfs/signatures/')
    signed_at = models.DateTimeField()

    consent_pdf = models.ForeignKey(
        ConsentPDF,
        related_name="signatures",
        on_delete=models.CASCADE
    )
    client = models.ForeignKey(
        Client,
        related_name="signatures",
        on_delete=models.CASCADE
    )
