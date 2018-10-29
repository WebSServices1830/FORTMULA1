from piloto.models import Piloto


class Simulacion:

    def __init__(self):
        pilotos_queryset = Piloto.objects.all()
        self.pilotos = list(pilotos_queryset)