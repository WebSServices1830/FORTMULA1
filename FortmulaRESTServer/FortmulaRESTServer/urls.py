from django.urls import path, include

urlpatterns = [
    path('', include('usuario.urls')),
    path('', include('security.urls')),
    path('escuderia/', include('escuderia.urls')),
    path('auto/', include('auto.urls')),
    path('opinion/', include('opinion.urls')),
    path('premio/', include('premio.urls')),
    path('campeonato/', include('campeonato.urls')),
    path('piloto/', include('piloto.urls')),
]
