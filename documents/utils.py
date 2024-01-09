from jsignature.utils import draw_signature
from django.core.files import File

from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa


def sig_to_image(img, key, full_name):
    image = draw_signature(img, as_file=True)
    image_binary = open(image, 'rb')
    file = File(image_binary)
    file.name = f"{key}_{full_name}.png"
    return file

def model_to_pdf(model, id, template_path):
    # template_path should be a string containing the
    # path to the template, such as 'app/modelview.html'

    # Get the model object and put in the template
    obj = get_object_or_404(model, id=id)
    context = {'obj': obj}
    template = get_template(template_path)
    html = template.render(context)

    # Create an HttpResponse as a surprise tool that
    # will help us later
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="{obj.full_name}_{obj.signed_date}_consent.pdf"'

    # Create a pdf
    pisa_status = pisa.CreatePDF(
        html, dest=response)

    # If there is an error, show error
    if pisa_status.err:
        return HttpResponse('We had some errors <pre>' + html + '</pre>')

    return response
