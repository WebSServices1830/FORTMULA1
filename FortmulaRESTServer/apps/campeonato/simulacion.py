from random import randint
from piloto.models import Piloto


class Simulacion:

    def __init__(self, pesos=None):
        self.id_pilotos = Piloto.objects.all().values_list('id', flat=True)
        self.agregar_pesos_diferentes(pesos)
        self.tam = len(set(self.id_pilotos))

    def simular(self):
        ranking = []
        id_pilotos = self.id_pilotos
        while not (len(ranking) == self.tam):
            indx_random = randint(0, len(id_pilotos) - 1)
            id_seleccionado = id_pilotos[indx_random]
            ranking.append(id_seleccionado)
            id_pilotos = [
                id for id in id_pilotos if not (id == id_seleccionado)
            ]
        return ranking

    def agregar_pesos_diferentes(self, pesos):
        if pesos is None:
            return
