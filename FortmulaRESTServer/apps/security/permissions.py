from rest_framework import permissions


class TokenPermission(permissions.BasePermission):
    """
    Permission to get token, public by default
    """

    def has_permission(self, request, view):
        return True


class AdminPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        user = request.user
        administrador = getattr(user, 'administrador', None)
        if administrador is not None:
            return True
        return False


class AficionadoPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        user = request.user
        aficionado = getattr(user, 'aficionado', None)
        if aficionado is not None:
            return True
        return False
