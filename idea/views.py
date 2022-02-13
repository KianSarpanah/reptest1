from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def health(request):
    return render(request, 'frontend/src/index.html', {})

def home(request):
    return HttpResponse("OK")