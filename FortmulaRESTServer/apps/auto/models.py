from django.db import models
from escuderia.models import Escuderia
from utils.models import BaseModel


class Auto(BaseModel):
    beam_wing = models.CharField(max_length=300)
    color = models.CharField(max_length=300)
    end_plate = models.CharField(max_length=300)
    foto = models.CharField(max_length=300)
    marca = models.CharField(max_length=300)
    motor = models.CharField(max_length=300)
    ponton = models.CharField(max_length=300)
    potencia = models.CharField(max_length=300)
    modelo = models.CharField(max_length=300)
    escuderia = models.ForeignKey(
        Escuderia,
        null=True,
        on_delete=models.PROTECT,
        related_name='autos'
    )
