from djongo import models
from users.models import User


class Block(models.Model):
    TYPE_OPTIONS = [
        ('heading', 'heading'),
        ('paragraph', 'paragraph'),
        ('image', 'image'),
        ('code', 'code'),
    ]

    type = models.CharField(choices=TYPE_OPTIONS, max_length=255)
    content = models.TextField()
    language = models.CharField(max_length=255, null=True)

    class Meta:
        abstract = True


class Doc(models.Model):
	id = models.ObjectIdField(primary_key=True)
	title = models.CharField(max_length=255)
	description = models.TextField()
	owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
	date_created = models.DateField(null=False, blank=False)
	blocks = models.ArrayField(model_container=Block)
