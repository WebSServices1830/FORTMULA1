from http import HTTPStatus
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, views
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import AdminPermission
from .models import Campeonato
from .serializers import CampeonatoSerializer


class CampeonatoView(views.APIView):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def get(self, request):
        queryset = Campeonato.objects.all()
        serializer = CampeonatoSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CampeonatoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Campeonato creada.', HTTPStatus.CREATED)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(CampeonatoView, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(CampeonatoView, self).get_permissions()


class CampeonatoViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def retrieve(self, request, id):
        escuderia = get_object_or_404(Campeonato, id=id)
        serializer = CampeonatoSerializer(escuderia)
        return Response(serializer.data)

    def update(self, request, id):
        escuderia = get_object_or_404(Campeonato, id=id)
        serializer = CampeonatoSerializer(escuderia, data=request.data)
        serializer.is_valid(raise_exception=True)
        escuderia = serializer.save()
        serializer = CampeonatoSerializer(escuderia)
        return Response(serializer.data)

    def destroy(self, request, id):
        escuderia = get_object_or_404(Campeonato, id=id)
        escuderia.delete()
        return Response('Campeonato fue eliminada')

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(CampeonatoViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(CampeonatoViewSet, self).get_permissions()
