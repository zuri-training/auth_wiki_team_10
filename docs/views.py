from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from .serializers import DocSerializer
from .models import Doc
from rest_framework import permissions
from .permissions import IsOwner


# Get all docs created by a particular user
class DocListAPIView(ListCreateAPIView):

    serializer_class = DocSerializer
    queryset = Doc.objects.all()
    permission_classes = (permissions.IsAuthenticated,)


    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)


# Get all docs
class DocListGeneralAPIView(ListCreateAPIView):
    serializer_class = DocSerializer
    queryset = Doc.objects.all()
    permission_classes = (permissions.IsAuthenticated,)


# Get a doc create by a specific user
class DocDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = DocSerializer
    queryset = Doc.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    lookup_field = 'id'

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)


# Get a specific doc
class DocDetailGeneralAPIView(RetrieveAPIView):
    serializer_class = DocSerializer
    queryset = Doc.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    lookup_field = 'id'
