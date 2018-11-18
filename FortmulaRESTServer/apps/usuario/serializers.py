from rest_framework import serializers
from .models import User, Aficionado, Administrador


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password')

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data.get('password'))
        user.save()
        return user


class AficionadoSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()

    class Meta:
        model = Aficionado
        fields = '__all__'

    def update(self, instance, validated_data):
        if 'usuario' in validated_data:
            usuario_data = validated_data.pop('usuario')
            usuario = instance.usuario
            usuario.username = usuario_data.get('username', usuario.username)
            password = usuario_data.get('password')
            if usuario.check_password(password):
                usuario.set_password(password)
            usuario.save()

        instance.descripcion = validated_data.get(
            'descripcion',
            instance.descripcion
        )
        instance.fechaNacimiento = validated_data.get(
            'fechaNacimiento',
            instance.fechaNacimiento
        )
        instance.foto = validated_data.get(
            'foto',
            instance.foto
        )
        instance.nombre = validated_data.get(
            'nombre',
            instance.nombre
        )
        instance.save()
        return instance

    def create(self, validated_data):
        usuario_data = validated_data.pop('usuario')
        usuario = User.objects.create_user(**usuario_data)
        aficionado = Aficionado.objects.create(
            usuario=usuario,
            **validated_data
        )
        return aficionado


class AdministradorSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()

    class Meta:
        model = Administrador
        fields = '__all__'

    def update(self, instance, validated_data):
        if 'usuario' in validated_data:
            usuario_data = validated_data.pop('usuario')
            usuario = instance.usuario
            usuario.username = usuario_data.get('username', usuario.username)
            password = usuario_data.get('password')
            if not usuario.check_password(password):
                usuario.set_password(password)
            usuario.save()

        instance.save()
        return instance

    def create(self, validated_data):
        usuario_data = validated_data.pop('usuario')
        usuario = User.objects.create_user(**usuario_data)
        administrador = Administrador.objects.create(
            usuario=usuario,
            **validated_data
        )
        return administrador
