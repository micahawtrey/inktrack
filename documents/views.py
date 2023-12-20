from django.shortcuts import render
from documents.forms import ConsentForm

# Create your views here.
def consent_form(request):
    if request.method == "POST":
        form = ConsentForm(request.POST)
        if form.is_valid():
            form.add_error("first_name", "Form is valid")
        else:
            form.add_error("first_name", "Form is NOT valid")

    else:
        form = ConsentForm()
    context = {
        "form": form,
    }
    return render(request, "documents/consent_form.html", context)
