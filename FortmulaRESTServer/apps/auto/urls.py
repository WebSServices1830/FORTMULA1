from django.urls import path

from .views import (
    AutoView,
    AutoViewSet
)

urlpatterns = [
    path(
        '',
        AutoView.as_view()
    ),
    path(
        '<int:id>/',
        AutoViewSet.as_view(
            {
                'get': 'retrieve',
                'patch': 'update',
                'delete': 'destroy'
            }
        )
    )
]
