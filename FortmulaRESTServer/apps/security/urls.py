from django.urls import re_path

from .views import (
    ChangePasswordView,
    GetTokenView,
    ForgotPasswordView,
)

urlpatterns = [
    re_path(
        'token/?',
        GetTokenView.as_view(),
        name='token'
    ),
    re_path(
        'change-password/',
        ChangePasswordView.as_view(),
        name='change-password'
    ),
    re_path(
        'reset-password/',
        ForgotPasswordView.as_view(),
        name='reset-password'
    ),
]
