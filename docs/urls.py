from django.urls import path
from . import views


urlpatterns = [
	path('', views.DocListGeneralAPIView.as_view(), name='docs'),
	path('user/', views.DocListAPIView.as_view(), name='user_docs'),
	path('<int:id>', views.DocDetailGeneralAPIView.as_view(), name='doc'),
	path('<int:id>/user', views.DocDetailAPIView.as_view(), name='user_doc'),
]
