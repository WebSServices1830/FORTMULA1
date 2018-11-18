from django.urls import path

from .views import (
    PremioView,
    PremioViewSet
)

urlpatterns = [
    path(
        '',
        PremioView.as_view()
    ),
    path(
        '<int:id>/',
        PremioViewSet.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        )
    )
]
