from http import HTTPStatus
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, views
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import AdminPermission
from piloto.serializers import PilotoSerializer
from .models import Escuderia
from .serializers import EscuderiaSerializer


class EscuderiaView(views.APIView):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def get(self, request):
        queryset = Escuderia.objects.all()
        serializer = EscuderiaSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EscuderiaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Escuderia creada.', HTTPStatus.CREATED)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(EscuderiaView, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(EscuderiaView, self).get_permissions()


class EscuderiaViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def retrieve(self, request, id):
        escuderia = get_object_or_404(Escuderia, id=id)
        serializer = EscuderiaSerializer(escuderia)
        return Response(serializer.data)

    def update(self, request, id):
        escuderia = get_object_or_404(Escuderia, id=id)
        serializer = EscuderiaSerializer(escuderia, data=request.data)
        serializer.is_valid(raise_exception=True)
        escuderia = serializer.save()
        serializer = EscuderiaSerializer(escuderia)
        return Response(serializer.data)

    def destroy(self, request, id):
        escuderia = get_object_or_404(Escuderia, id=id)
        escuderia.delete()
        return Response('Escuderia fue eliminada')

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(EscuderiaViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(EscuderiaViewSet, self).get_permissions()


class EscuderiaPilotoView(views.APIView):

    def get(self, request, id):
        escuderia = get_object_or_404(Escuderia, id=id)
        queryset = escuderia.pilotos.all()
        serializer = PilotoSerializer(queryset, many=True)
        return Response(serializer.data)
