from django.db import models
from escuderia.models import Escuderia
from utils.models import BaseModel


class Auto(BaseModel):
    beam_wing = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    end_plate = models.CharField(max_length=100)
    foto = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    motor = models.CharField(max_length=100)
    ponton = models.CharField(max_length=100)
    potencia = models.CharField(max_length=100)
    escuderia = models.ForeignKey(
        Escuderia,
        on_delete=models.PROTECT,
        related_name='auto'
    )
