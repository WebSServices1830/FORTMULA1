from django.urls import path, re_path

from .views import (
    ChangePasswordView,
    GetTokenView,
    ForgotPasswordView,
)

urlpatterns = [
    path(
        'token/',
        GetTokenView.as_view(),
        name='token'
    ),
    path(
        'change-password/',
        ChangePasswordView.as_view(),
        name='change-password'
    ),
    path(
        'reset-password/',
        ForgotPasswordView.as_view(),
        name='reset-password'
    ),
]
