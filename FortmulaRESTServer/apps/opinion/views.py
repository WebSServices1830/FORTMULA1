from http import HTTPStatus
from rest_framework import viewsets
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import AficionadoPermission
from .models import OpinionPiloto, OpinionPremio
from .serializers import OpinionPilotoSerializer, OpinionPremioSerializer


class OpinionPilotoViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AficionadoPermission,)

    def create(self, request):
        request_data = request.data
        request_data.update(
            {
                'aficionado': request.user.aficionado.id
            }
        )
        serializer = OpinionPilotoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Opinion creada.', HTTPStatus.CREATED)

    def retrieve(self, request, id_piloto):
        queryset = OpinionPiloto.objects.filter(piloto__id=id_piloto)
        serializer = OpinionPilotoSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(OpinionPilotoViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(OpinionPilotoViewSet, self).get_permissions()


class OpinionPremioViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AficionadoPermission,)

    def create(self, request):
        request_data = request.data
        request_data.update(
            {
                'aficionado': request.user.aficionado.id
            }
        )
        serializer = OpinionPremioSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Opinion creada.', HTTPStatus.CREATED)

    def retrieve(self, request, id_premio):
        queryset = OpinionPremio.objects.filter(premio__id=id_premio)
        serializer = OpinionPremioSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(OpinionPremioViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(OpinionPremioViewSet, self).get_permissions()
