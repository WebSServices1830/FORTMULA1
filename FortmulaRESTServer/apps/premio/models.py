from django.db import models
from campeonato.models import Campeonato
from piloto.models import Piloto
from utils.models import BaseModel


class InfoPista(BaseModel):
    descripcion = models.TextField()
    foto = models.CharField(
        max_length=300
    )
    longitud = models.DecimalField(
        decimal_places=2,
        max_digits=12
    )
    nombre = models.CharField(
        max_length=100
    )
    tiempo_ganador = models.CharField(
        max_length=100
    )
    ganador = models.CharField(
        max_length=100
    )


class Premio(BaseModel):
    ciudad = models.CharField(max_length=100)
    fecha = models.DateField(null=True)
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


class Carrera(BaseModel):
    premio = models.OneToOneField(
        Premio,
        on_delete=models.PROTECT
    )
    num_vueltas = models.SmallIntegerField(default=3)


class Resultado(BaseModel):
    puesto = models.SmallIntegerField()
    mejor_vuelta = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    tiempo_carrera = models.DecimalField(
        null=True,
        max_digits=12,
        decimal_places=2
    )
    tiempo_clasificacion = models.DecimalField(
        null=True,
        max_digits=12,
        decimal_places=2
    )
    carrera = models.ForeignKey(
        Carrera,
        on_delete=models.PROTECT
    )
    piloto = models.ForeignKey(
        Piloto,
        on_delete=models.PROTECT
    )


class Clasificacion(BaseModel):
    premio = models.OneToOneField(
        Premio,
        on_delete=models.PROTECT
    )
    q1 = models.OneToOneField(
        Carrera,
        null=True,
        related_name='clasificacion_q1',
        on_delete=models.PROTECT
    )
    q2 = models.OneToOneField(
        Carrera,
        null=True,
        related_name='clasificacion_q2',
        on_delete=models.PROTECT
    )
    q3 = models.OneToOneField(
        Carrera,
        null=True,
        related_name='clasificacion_q3',
        on_delete=models.PROTECT
    )
