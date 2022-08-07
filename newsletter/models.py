from django.db import models

# Create your models here.

class newsletters(models.Model):
    email = models.CharField(max_length=255, unique=True)