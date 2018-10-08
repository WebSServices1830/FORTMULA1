from django.db import models
from escuderia.models import Escuderia
from auto.models import Auto
from utils.models import BaseModel


class Piloto(BaseModel):
    fecha_nacimiento = models.DateField()
    foto = models.CharField(max_length=200)
    nacionalidad = models.CharField(max_length=200)
    nombre = models.CharField(max_length=200)
    escuderia = models.ForeignKey(
        Escuderia,
        on_delete=models.PROTECT,
        related_name='piloto'
    )
    auto = models.OneToOneField(
        Auto,
        on_delete=models.PROTECT,
        related_name='piloto'
    )
