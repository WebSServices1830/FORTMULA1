from http import HTTPStatus
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, views
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import AdminPermission
from .models import Piloto
from .serializers import PilotoSerializer


class PilotoView(views.APIView):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def get(self, request):
        queryset = Piloto.objects.all()
        serializer = PilotoSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PilotoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Piloto creado.', HTTPStatus.CREATED)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(PilotoView, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(PilotoView, self).get_permissions()


class PilotoViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def retrieve(self, request, id):
        auto = get_object_or_404(Piloto, id=id)
        serializer = PilotoSerializer(auto)
        return Response(serializer.data)

    def update(self, request, id):
        auto = get_object_or_404(Piloto, id=id)
        serializer = PilotoSerializer(auto, data=request.data)
        serializer.is_valid(raise_exception=True)
        auto = serializer.save()
        serializer = PilotoSerializer(auto)
        return Response(serializer.data)

    def destroy(self, request, id):
        auto = get_object_or_404(Piloto, id=id)
        auto.delete()
        return Response('Piloto fue eliminado.')

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(PilotoViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(PilotoViewSet, self).get_permissions()
