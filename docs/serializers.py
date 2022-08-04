from rest_framework import serializers
from .models import Doc


class DocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = ['title', 'id', 'description', 'date_created', 'blocks']
