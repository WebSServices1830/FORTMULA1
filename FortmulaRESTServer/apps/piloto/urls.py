from django.urls import path

from .views import (
    PilotoView,
    PilotoViewSet
)

urlpatterns = [
    path(
        '',
        PilotoView.as_view()
    ),
    path(
        '<int:id>/',
        PilotoViewSet.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        )
    )
]
