from django.urls import path
from .views import GoogleLogin, RegisterView, LoginAPIView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login' )
]
