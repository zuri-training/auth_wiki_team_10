from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.views.generic import TemplateView

schema_view = get_schema_view(
   openapi.Info(
      title="Auth Wiki API",
      default_version='v1',
      description="Wiki for authentication codes",
      terms_of_service="http://127.0.0.1/api-docs/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
   path('', TemplateView.as_view(template_name='index.html')),
   path('auth/', include('users.urls')),
   path('admin/', admin.site.urls),
   path('api-docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]