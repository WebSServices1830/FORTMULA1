from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.utils.translation import ugettext as _
from rest_framework.authtoken.models import Token
from rest_framework import serializers, exceptions

from .models import CodeReset

from .mixins import (
    CodeIsExpiredMixin,
    CodeResetPasswordGenMixin,
    TokenIsExpiredMixin
)


class AuthTokenSerializer(
    serializers.Serializer,
    TokenIsExpiredMixin
):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})

    def _get_token_from_user(self, user):
        token, created = Token.objects.get_or_create(user=user)
        if not created:
            if self._is_expired(token):
                token.delete()
                token = Token.objects.create(user=user)
        return token.key

    def validate(self, data):

        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(
                username=username,
                password=password
            )

            if user:
                if not user.is_active:
                    msg = _('User account is disabled.')
                    raise exceptions.ValidationError(msg)
            else:
                msg = _('Unable to log in with provided credentials.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Must include "username" and "password".')
            raise exceptions.ValidationError(msg)

        token = self._get_token_from_user(user)

        data.update({
            'user': user,
            'token': token
        })

        return data


class ForgotPasswordSerializer(
    serializers.Serializer,
    CodeIsExpiredMixin,
    CodeResetPasswordGenMixin
):
    email = serializers.EmailField()

    def validate_email(self, email):
        try:
            User.objects.get(email=email)
            return email
        except User.DoesNotExist:
            msg = _('User does not exist')
            raise exceptions.ValidationError(msg)

    def validate(self, data):
        user = self._get_user(data.get('email'))
        code = self._get_code(user)
        if code is None or self._is_expired(code):
            code = self.generate_password_reset_code(user)
        else:
            code = code.code
        data.update(code=code)
        full_name = '{} {}'.format(user.first_name, user.last_name)
        data.update(full_name=full_name)
        return data

    def _get_code(self, user):
        try:
            return CodeReset.objects.get(user=user)
        except CodeReset.DoesNotExist:
            return None

    def _get_user(self, email):
        return User.objects.get(email=email)


class ChangePasswordSerializer(
    serializers.Serializer,
    CodeIsExpiredMixin
):
    code = serializers.IntegerField()
    email = serializers.EmailField()
    password = serializers.CharField(max_length=60)
    password_copy = serializers.CharField(max_length=60)

    def validate_email(self, email):
        try:
            User.objects.get(email=email)
            return email
        except User.DoesNotExist:
            msg = _('User does not exist')
            raise exceptions.ValidationError(msg)

    def validate(self, data):
        password = data.get('password')
        password_copy = data.get('password_copy')
        code = data.get('code')
        email = data.get('email')
        if not (password == password_copy):
            raise serializers.ValidationError("Password doesn't match.")
        user = self._get_user(email)
        code = self._get_code(code, user)
        if code is None:
            msg = _('Invalid code')
            raise exceptions.ValidationError(msg)
        if self._is_expired(code):
            msg = _('Code expired')
            raise exceptions.ValidationError(msg)
        return data

    def _get_code(self, code, user):
        try:
            return CodeReset.objects.get(user=user, code=code)
        except CodeReset.DoesNotExist:
            return None

    def _get_user(self, email):
        return User.objects.get(email=email)
