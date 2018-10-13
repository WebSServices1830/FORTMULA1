from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import TokenPermission
from .models import Apuesta
from .serializers import ApuestaSerializer


class ApuestaView(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (TokenPermission,)

    def list(self, request):
        queryset = Apuesta.objects.all()
        serializer = ApuestaSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ApuestaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data)

    def retrieve(self, request, id):
        apuesta = get_object_or_404(Apuesta, id=id)
        serializer = ApuestaSerializer(apuesta)
        return Response(serializer.data)

    def update(self, request, id):
        apuesta = get_object_or_404(Apuesta, id=id)
        serializer = ApuestaSerializer(apuesta, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data)

    def destroy(self, request, id):
        apuesta = get_object_or_404(Apuesta, id=id)
        apuesta.delete()
        return Response('OK')
