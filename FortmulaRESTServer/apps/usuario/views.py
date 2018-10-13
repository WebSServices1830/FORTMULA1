from http import HTTPStatus
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import TokenPermission
from .models import Administrador, Aficionado
from .serializers import AdministradorSerializer, AficionadoSerializer


class AdministradorView(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (TokenPermission,)

    def list(self, request):
        queryset = Administrador.objects.all()
        serializer = AdministradorSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AdministradorSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data, HTTPStatus.CREATED)

    def retrieve(self, request, id):
        administrador = get_object_or_404(Administrador, id=id)
        serializer = AdministradorSerializer(administrador)
        return Response(serializer.data)

    def update(self, request, id):
        administrador = get_object_or_404(
            Administrador,
            id=id
        )
        serializer = AdministradorSerializer(
            administrador,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data)

    def destroy(self, request, id):
        administrador = get_object_or_404(Administrador, id=id)
        administrador.delete()
        return Response('OK')


class AficionadoView(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (TokenPermission,)

    def list(self, request):
        queryset = Aficionado.objects.all()
        serializer = AficionadoSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AficionadoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data, HTTPStatus.CREATED)

    def retrieve(self, request, id):
        aficionado = get_object_or_404(Aficionado, id=id)
        serializer = AficionadoSerializer(aficionado)
        return Response(serializer.data)

    def update(self, request, id):
        aficionado = get_object_or_404(
            Aficionado,
            id=id
        )
        serializer = AficionadoSerializer(
            aficionado,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data)

    def destroy(self, request, id):
        aficionado = get_object_or_404(Aficionado, id=id)
        aficionado.delete()
        return Response('OK')
