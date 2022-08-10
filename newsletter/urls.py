from django.urls import path

from .views import NewsLetter

urlpatterns = [
    path('newsletter', NewsLetter.as_view(), name='get_started'),
]
