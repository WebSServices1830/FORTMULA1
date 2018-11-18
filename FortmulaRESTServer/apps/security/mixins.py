import os
from datetime import datetime, timedelta
from pytz import utc
from random import randint
from .models import CodeReset


class IsExpiredMixin:
    DURATION = 0

    def _is_expired(self, obj):
        now = datetime.utcnow().replace(tzinfo=utc)
        if obj.created < now - timedelta(seconds=self.DURATION):
            return True
        return False


class TokenIsExpiredMixin(IsExpiredMixin):
    DURATION = int(os.environ.get('TOKEN_DURATION', 1800))


class CodeIsExpiredMixin(IsExpiredMixin):
    DURATION = int(os.environ.get('CODE_DURATION', 300))


class CodeResetPasswordGenMixin:

    def _create_random_code(self):

        code = str(
            randint(
                1000,
                9999
            )
        )
        return code

    def generate_password_reset_code(self, user):
        code = self._create_random_code()
        try:
            old_reset = CodeReset.objects.get(
                user_id=user.id
            )
            old_reset.delete()
        except CodeReset.DoesNotExist:
            pass
        CodeReset.objects.create(
            user=user,
            code=code
        )
        return code
