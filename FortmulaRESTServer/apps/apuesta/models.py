from django.db import models
from usuario.models import Aficionado
from premio.models import Premio
from utils.models import BaseModel


class Apuesta(BaseModel):
    valor = models.DecimalField(
        decimal_places=2,
        max_digits=12
    )
    aficionado = models.ForeignKey(
        Aficionado,
        on_delete=models.PROTECT,
        related_name='apuestas'
    )
    premio = models.ForeignKey(
        Premio,
        on_delete=models.PROTECT,
        related_name='apuestas'
    )
