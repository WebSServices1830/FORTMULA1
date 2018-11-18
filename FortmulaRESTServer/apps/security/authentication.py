from rest_framework import exceptions
from rest_framework.authentication import (
    BaseAuthentication,
    TokenAuthentication
)
from .mixins import TokenIsExpiredMixin


class Authentication(
    TokenAuthentication,
    TokenIsExpiredMixin
):
    keyword = 'Token:'

    def authenticate(self, request):
        auth = super().authenticate(request)
        if auth is None:
            raise exceptions.AuthenticationFailed(
                'Missing Authorization header'
            )
        user, token = auth
        if self._is_expired(token):
            raise exceptions.AuthenticationFailed('Token has expired')
        return user, token


class GetTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        user = None
        return user, None
