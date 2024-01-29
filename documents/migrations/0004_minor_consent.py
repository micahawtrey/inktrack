# Generated by Django 5.0 on 2024-01-10 23:38

import localflavor.us.models
import phonenumber_field.modelfields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0003_alter_consent_back_id_alter_consent_front_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Minor_Consent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('guardianship', models.CharField(max_length=100)),
                ('first', models.CharField(max_length=30)),
                ('last', models.CharField(max_length=30)),
                ('age', models.IntegerField()),
                ('birth_date', models.DateField()),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None)),
                ('email', models.EmailField(max_length=254)),
                ('address_line_1', models.CharField(max_length=100)),
                ('address_line_2', models.CharField(blank=True, max_length=100, null=True)),
                ('city', models.CharField(max_length=100)),
                ('state_province', localflavor.us.models.USStateField(max_length=2)),
                ('postal_zip_code', localflavor.us.models.USZipCodeField(max_length=10)),
                ('tattoo_desc', models.CharField(max_length=500)),
                ('tattoo_place', models.CharField(max_length=100)),
                ('signature', models.ImageField(upload_to='temp_signatures/')),
                ('signed_date', models.DateField()),
                ('front_id', models.FileField(upload_to='temp_id_photos/')),
                ('back_id', models.FileField(upload_to='temp_id_photos/')),
            ],
        ),
    ]
