from django.db import models
from utils.models import BaseModel
from usuario.models import Aficionado
from piloto.models import Piloto
from premio.models import Premio


class Opinion(models.Model):
    calificacion = models.IntegerField()
    comentario = models.TextField()

    class Meta:
        abstract = True


class OpinionPiloto(BaseModel, Opinion):
    aficionado = models.ForeignKey(
        Aficionado,
        on_delete=models.PROTECT,
        related_name='opinion_piloto'
    )
    piloto = models.ForeignKey(
        Piloto,
        on_delete=models.PROTECT,
        related_name='opinion_piloto'
    )


class OpinionPremio(BaseModel, Opinion):
    aficionado = models.ForeignKey(
        Aficionado,
        on_delete=models.PROTECT,
        related_name='opinion_premio'
    )
    premio = models.ForeignKey(
        Premio,
        on_delete=models.PROTECT,
        related_name='opinion_premio'
    )
