from django.urls import path
from .views import feedback_list

urlpatterns = [
    path('api/feedback/', feedback_list, name='feedback_list'),
]