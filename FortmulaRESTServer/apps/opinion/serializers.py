from rest_framework import serializers
from .models import OpinionPiloto, OpinionPremio


class OpinionPilotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = OpinionPiloto
        fields = '__all__'


class OpinionPremioSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpinionPremio
        fields = '__all__'
