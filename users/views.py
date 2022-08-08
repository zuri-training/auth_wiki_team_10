from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from drf_yasg.utils import swagger_auto_schema


from .serializers import RegisterSerializer, LoginSerializer
from .models import User


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
