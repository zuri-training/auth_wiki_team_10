from rest_framework import serializers
from .models import User
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed

class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(
    max_length=68, min_length=6, write_only=True)

  class Meta:
    model = User
    fields = ['email', 'username', 'password']

  def validate(self, attrs):
    email = attrs.get('email', '')
    username = attrs.get('username', '')

    if not username.isalnum():
      raise serializers.ValidationError(
        'The username should only contain alphanumeric charaters')
    return attrs

  def create(self, validated_data):
    return User.objects.create_user(**validated_data)

  
class LoginSerializer(serializers.ModelSerializer):
	email = serializers.EmailField(max_length=255, min_length=3)
	password = serializers.CharField(max_length=68, min_length=6, write_only=True)
	username = serializers.CharField(max_length=68, min_length=6, read_only=True)
	tokens = serializers.CharField(max_length=68, min_length=6, read_only=True)

	class Meta:
		model = User
		fields = ['email', 'password', 'username', 'tokens']

	def validate(self, attrs):
		email = attrs.get('email', '')
		password = attrs.get('password', '')

		user = auth.authenticate(email=email, password=password)
		if not user:
			raise AuthenticationFailed('Invalid credentials! Try again!')
		# if not user.is_verified:
		# 	raise AuthenticationFailed('Email is not verified')

		return {
			'email': user.email,
			'username': user.username,
			'tokens': user.tokens(),
		}

class EmailVerificationSerializer(serializers.ModelSerializer):
  token = serializers.CharField(max_length=555)

  class Meta:
    model = User
    fields = ['token']