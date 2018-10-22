from http import HTTPStatus
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, views
from rest_framework.response import Response
from security.authentication import Authentication
from security.permissions import AdminPermission
from .models import Auto
from .serializers import AutoSerializer


class AutoView(views.APIView):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def get(self, request):
        queryset = Auto.objects.all()
        serializer = AutoSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AutoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response('Auto creado.', HTTPStatus.CREATED)

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(AutoView, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(AutoView, self).get_permissions()


class AutoViewSet(viewsets.ViewSet):
    authentication_classes = (Authentication,)
    permission_classes = (AdminPermission,)

    def retrieve(self, request, id):
        auto = get_object_or_404(Auto, id=id)
        serializer = AutoSerializer(auto)
        return Response(serializer.data)

    def update(self, request, id):
        auto = get_object_or_404(Auto, id=id)
        serializer = AutoSerializer(auto, data=request.data)
        serializer.is_valid(raise_exception=True)
        auto = serializer.save()
        serializer = AutoSerializer(auto)
        return Response(serializer.data)

    def destroy(self, request, id):
        auto = get_object_or_404(Auto, id=id)
        auto.delete()
        return Response('Auto fue eliminado.')

    def get_authenticators(self):
        if self.request.method == 'GET':
            self.authentication_classes = []
        return super(AutoViewSet, self).get_authenticators()

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = []
        return super(AutoViewSet, self).get_permissions()
