from http import HTTPStatus
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .permissions import (
    TokenPermission,
)
from .authentication import (
    GetTokenAuthentication,
)
from .serializers import (
    AuthTokenSerializer,
    ChangePasswordSerializer,
    ForgotPasswordSerializer
)


class GetTokenView(GenericAPIView):
    authentication_classes = (GetTokenAuthentication,)
    permission_classes = (TokenPermission,)
    serializer_class = AuthTokenSerializer

    def get(self, request):
        return Response("OK")

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data.get('token')
        data = {
            'token': token
        }
        return Response(data)


class ChangePasswordView(GenericAPIView):
    authentication_classes = (GetTokenAuthentication,)
    permission_classes = (TokenPermission,)
    serializer_class = ChangePasswordSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.get(email=serializer.validated_data.get('email'))
        password = request.data.get('password')
        user.set_password(password)
        user.save()
        response = dict(message='OK')
        return Response(response, status=HTTPStatus.OK)


class ForgotPasswordView(GenericAPIView):
    authentication_classes = (GetTokenAuthentication,)
    permission_classes = (TokenPermission,)
    serializer_class = ForgotPasswordSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response('OK')
