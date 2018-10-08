from django.db import models
from utils.models import BaseModel


class Campeonato(BaseModel):
    fecha_inicio = models.DateField()
    fecha_final = models.DateField()
    nombre = models.CharField(max_length=100)
