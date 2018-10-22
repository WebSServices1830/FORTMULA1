from django.urls import path

from .views import (
    EscuderiaView,
    EscuderiaViewSet
)

urlpatterns = [
    path(
        '',
        EscuderiaView.as_view()
    ),
    path(
        '<int:id>/',
        EscuderiaViewSet.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        ),
        name='token'
    )
]
