from django.urls import path

from .views import (
    PremioView,
    PremioViewSet,
    SimularQ1View,
    SimularQ2View,
    SimularQ3View
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
    ),
    path(
        '<int:id>/q1/',
        SimularQ1View.as_view()
    ),
    path(
        '<int:id>/q2/',
        SimularQ2View.as_view()
    ),
    path(
        '<int:id>/q3/',
        SimularQ3View.as_view()
    )
]
