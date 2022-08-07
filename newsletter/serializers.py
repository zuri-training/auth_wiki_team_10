from .models import newsletters
from rest_framework import serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = newsletters
        fields = ['email']