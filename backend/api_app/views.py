from django.shortcuts import render
from rest_framework import viewsets
from api_app.serializers import EmployeeSerializer
from api_app.models import Employee


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
# Create your views here.
