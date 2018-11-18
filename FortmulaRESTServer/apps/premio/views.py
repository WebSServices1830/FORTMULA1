from http import HTTPStatus
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, views
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import AdminPermission
from .models import Premio
from .serializers import PremioSerializer


class PremioView(views.APIView):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def get(self, request):
        queryset = Premio.objects.all()
        serializer = PremioSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PremioSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Premio creado.', HTTPStatus.CREATED)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(PremioView, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(PremioView, self).get_permissions()


class PremioViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def retrieve(self, request, id):
        auto = get_object_or_404(Premio, id=id)
        serializer = PremioSerializer(auto)
        return Response(serializer.data)

    def update(self, request, id):
        auto = get_object_or_404(Premio, id=id)
        serializer = PremioSerializer(auto, data=request.data)
        serializer.is_valid(raise_exception=True)
        auto = serializer.save()
        serializer = PremioSerializer(auto)
        return Response(serializer.data)

    def destroy(self, request, id):
        auto = get_object_or_404(Premio, id=id)
        auto.delete()
        return Response('Premio fue eliminado.')

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(PremioViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(PremioViewSet, self).get_permissions()


class SimularQ1View(views.View):

    def get(self, request, id):
        pass


class SimularQ2View(views.View):

    def get(self, request, id):
        pass


class SimularQ3View(views.View):

    def get(self, request, id):
        pass
