from django.urls import path

from .views import (
    CampeonatoView,
    CampeonatoViewSet
)

urlpatterns = [
    path(
        '',
        CampeonatoView.as_view()
    ),
    path(
        '<int:id>/',
        CampeonatoViewSet.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        ),
        name='campeonato-crud'
    )
]
