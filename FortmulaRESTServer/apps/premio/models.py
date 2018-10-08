from django.db import models
from campeonato.models import Campeonato
from utils.models import BaseModel


class InfoPista(BaseModel):
    descripcion = models.CharField(
        max_length=100
    )
    foto = models.CharField(
        max_length=100
    )
    longitud = models.DecimalField(
        decimal_places=2,
        max_digits=12
    )
    nombre = models.CharField(
        max_length=100
    )
    puntuacion = models.IntegerField()


class Premio(BaseModel):
    ciudad = models.CharField(max_length=100)
    fecha = models.DateField()
    info_pista = models.OneToOneField(
        InfoPista,
        on_delete=models.PROTECT,
        related_name='premio'
    )
    campeonato = models.ForeignKey(
        Campeonato,
        on_delete=models.PROTECT,
        related_name='premios'
    )
