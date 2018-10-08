from django.db import models
from campeonato.models import Campeonato
from utils.models import BaseModel


class Escuderia(BaseModel):
    descripcion = models.TextField()
    foto = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    campeonato = models.ForeignKey(
        Campeonato,
        on_delete=models.PROTECT,
        related_name='escuderia'
    )
