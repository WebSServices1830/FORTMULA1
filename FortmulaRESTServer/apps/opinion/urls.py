from django.urls import path
from .views import (
    OpinionPilotoViewSet,
    OpinionPremioViewSet
)

urlpatterns = [
    path(
        'piloto/',
        OpinionPilotoViewSet.as_view({'post': 'create'})
    ),
    path(
        'piloto/<int:id_piloto>/',
        OpinionPilotoViewSet.as_view({'get': 'retrieve'})
    ),
    path(
        'premio/',
        OpinionPremioViewSet.as_view({'post': 'create'})
    ),
    path(
        'premio/<int:id_premio>/',
        OpinionPremioViewSet.as_view({'get': 'retrieve'})
    )
]
