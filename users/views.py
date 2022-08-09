from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.views.generic import TemplateView 
from drf_yasg.utils import swagger_auto_schema


from .serializers import RegisterSerializer, LoginSerializer
from .models import User
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView


    
class RegisterView(generics.GenericAPIView):

    serializer_class = RegisterSerializer

    @swagger_auto_schema(operation_description="Register User")
    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data

        return Response(user_data, status=status.HTTP_201_CREATED)


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    @swagger_auto_schema(operation_description="Sign in User")
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class VerifyEmail(generics.GenericAPIView):
    def get(self):
        pass


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
