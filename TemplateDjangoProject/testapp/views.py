from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.pip in

def index(request):
    return render(request, "index.html")
