
from django.urls import path
from .views import home, health

urlpatterns = [
    path('health/', health, name='health'),
    path('', home, name='app-home'),
    ]