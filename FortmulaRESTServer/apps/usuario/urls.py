from django.urls import path, re_path

from .views import (
    AdministradorView,
    AficionadoView
)

urlpatterns = [
    re_path(
        'usuarios/administradores/?$',
        AdministradorView.as_view(
            {
                'get': 'list',
                'post': 'create'
            }
        ),
        name='usuarios-administradores'
    ),
    re_path(
        'usuarios/administradores/(?P<id>[0-9]+)/?$',
        AdministradorView.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        ),
        name='usuarios-administradores-id'
    ),
    re_path(
        'usuarios/aficionados/?$',
        AficionadoView.as_view(
            {
                'get': 'list',
                'post': 'create'
            }
        ),
        name='usuarios-aficionados'
    ),
    re_path(
        'usuarios/aficionados/(?P<id>[0-9]+)/?$',
        AficionadoView.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        ),
        name='usuarios-aficionados-id'
    )
]
