from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from utils.models import BaseModel


class CodeReset(BaseModel):
    user = models.OneToOneField(
        User,
        related_name='user_code',
        verbose_name=_(u'user'),
        on_delete=models.PROTECT
    )
    code = models.CharField(
        max_length=4,
        verbose_name=_(u'code')
    )

    def __str__(self):
        return "Code: {}, user {}".format(
            self.code,
            self.user.username
        )
