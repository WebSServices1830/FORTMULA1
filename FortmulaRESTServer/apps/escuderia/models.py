from django.db import models
from campeonato.models import Campeonato
from utils.models import BaseModel


class Escuderia(BaseModel):
    descripcion = models.TextField()
    foto = models.CharField(max_length=300)
    nombre = models.CharField(max_length=300)
    base = models.CharField(max_length=300)
    pais = models.CharField(max_length=300)
    campeonato = models.ForeignKey(
        Campeonato,
        on_delete=models.PROTECT,
        related_name='escuderia'
    )
