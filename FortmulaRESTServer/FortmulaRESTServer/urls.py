from django.urls import path, include

urlpatterns = [
    path('', include('usuario.urls')),
    path('', include('security.urls')),
    path('escuderia/', include('escuderia.urls')),
    path('auto/', include('auto.urls')),
]
