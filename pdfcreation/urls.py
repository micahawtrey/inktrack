from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('consent/<int:id>', ConsentPdf.as_view(), name='ConsentPdf'),
    path('consent/<int:id>/download/', DownloadView.as_view(), name='ConsentDownload'),
    path('consent/<int:id>/printview/', PrintView.as_view(), name='ConsentPrintView'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
