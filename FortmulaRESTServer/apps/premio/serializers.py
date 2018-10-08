from rest_framework import serializers
from .models import InfoPista, Premio


class InfoPistaSerializer(serializers.ModelSerializer):

    class Meta:
        model = InfoPista
        fields = '__all__'


class PremioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Premio
        fields = '__all__'
