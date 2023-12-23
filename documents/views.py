from django.shortcuts import render
from documents.forms import ConsentForm
from documents.models import *
from django.http import HttpResponse, FileResponse
from django.template.loader import get_template
import io
import os
from documents.utils import convertimage
from xhtml2pdf import pisa

# Create your views here.
def consent_form(request):
    if request.method == "POST":
        form = ConsentForm(request.POST, request.FILES)
        if form.is_valid():



            context = {
                'form': form,
            }

            template_path = 'documents/consent_pdf.html'
            context = {'form': form}
            # Create a Django response object, and specify content_type as pdf
            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = 'filename="report.pdf"'
            # find the template and render it.
            template = get_template(template_path)
            html = template.render(context)

            # create a pdf
            pisa_status = pisa.CreatePDF(html, dest=response)

            # if error then show some funny view
            if pisa_status.err:
                return HttpResponse('We had some errors <pre>' + html + '</pre>')
            return response


        else:
            form.add_error("first_name", "Form is NOT valid")

    else:
        form = ConsentForm()
    context = {
        "form": form,
    }
    return render(request, "documents/consent_form.html", context)

# def render_pdf_view(request):
#     template_path = 'consent_pdf.html'
#     context = {'form': form}
#     # Create a Django response object, and specify content_type as pdf
#     response = HttpResponse(content_type='application/pdf')
#     response['Content-Disposition'] = 'filename="report.pdf"'
#     # find the template and render it.
#     template = get_template(template_path)
#     html = template.render(context)

#     # create a pdf
#     pisa_status = pisa.CreatePDF(
#        html, dest=response, link_callback=link_callback)
#     # if error then show some funny view
#     if pisa_status.err:
#        return HttpResponse('We had some errors <pre>' + html + '</pre>')
#     return response
