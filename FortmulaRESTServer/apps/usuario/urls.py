from django.urls import path, re_path

from .views import (
    AdministradorView,
    AficionadoView
)

urlpatterns = [
    path(
        'usuarios/administradores/',
        AdministradorView.as_view(
            {
                'get': 'list',
                'post': 'create'
            }
        ),
        name='usuarios-administradores'
    ),
    path(
        'usuarios/administradores/<int:id>/',
        AdministradorView.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        ),
        name='usuarios-administradores-id'
    ),
    path(
        'usuarios/aficionados/',
        AficionadoView.as_view(
            {
                'get': 'list',
                'post': 'create'
            }
        ),
        name='usuarios-aficionados'
    ),
    path(
        'usuarios/aficionados/<int:id>/',
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
