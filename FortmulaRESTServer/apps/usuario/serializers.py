from rest_framework import serializers
from .models import User, Aficionado, Administrador


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class AficionadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Aficionado
        fields = '__all__'


class AdministradorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Administrador
        fields = '__all__'
