from django.db import models

# Create your models here.
class Employee(models.Model):
    employee_id=models.BigIntegerField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_department =models.CharField(max_length=200)
    employee_role =models.CharField(max_length=200)
    employee_duties =models.CharField(max_length=200)

    def _str_(self):
     return self.first_name
