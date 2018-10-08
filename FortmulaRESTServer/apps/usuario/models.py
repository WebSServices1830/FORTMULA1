from django.db import models
from django.contrib.auth.models import User
from utils.models import BaseModel


class Aficionado(BaseModel):
    descripcion = models.TextField()
    fechaNacimiento = models.DateField()
    foto = models.CharField(max_length=200)
    nombre = models.CharField(max_length=200)
    usuario = models.OneToOneField(User, on_delete=models.PROTECT)


class Administrador(BaseModel):
    usuario = models.OneToOneField(User, on_delete=models.PROTECT)
