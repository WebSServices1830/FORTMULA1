from django.urls import path, include

urlpatterns = [
    path('', include('usuario.urls')),
    path('', include('security.urls')),
]
