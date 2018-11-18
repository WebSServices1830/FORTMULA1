from rest_framework import serializers
from .models import Escuderia


class EscuderiaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Escuderia
        fields = '__all__'
