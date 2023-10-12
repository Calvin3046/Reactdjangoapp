from rest_framework import serializers
from api_app.models import Employee

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Employee
        fields=['employee_id','last_name','first_name','employee_department','employee_role','employee_duties'] 