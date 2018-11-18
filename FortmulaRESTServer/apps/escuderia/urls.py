from django.urls import path

from .views import (
    EscuderiaView,
    EscuderiaViewSet,
    EscuderiaPilotoView
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
        )
    ),
    path(
        '<int:id>/pilotos/',
        EscuderiaPilotoView.as_view()
    )
]
