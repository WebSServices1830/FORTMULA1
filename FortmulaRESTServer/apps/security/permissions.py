from rest_framework import permissions
from django.contrib.auth.models import User

# TODO: Define groups and make different permission class for each of them


class TokenPermission(permissions.BasePermission):
    """
    Permission to get token, public by default
    """

    def has_permission(self, request, view):
        return True
