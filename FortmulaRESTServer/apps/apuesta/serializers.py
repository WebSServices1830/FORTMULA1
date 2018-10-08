from rest_framework import serializers
from .models import Apuesta


class ApuestaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apuesta
        fields = '__all__'
