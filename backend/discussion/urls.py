from django.urls import path
from .views import discussion_list

urlpatterns = [
    path('api/discussion/', discussion_list, name='discussion_list'),
]