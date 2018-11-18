# Generated by Django 2.1 on 2018-11-18 19:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('usuario', '0001_initial'),
        ('premio', '0001_initial'),
        ('piloto', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='OpinionPiloto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
                ('calificacion', models.IntegerField()),
                ('comentario', models.TextField()),
                ('aficionado', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='opinion_piloto', to='usuario.Aficionado')),
                ('piloto', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='opinion_piloto', to='piloto.Piloto')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OpinionPremio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
                ('calificacion', models.IntegerField()),
                ('comentario', models.TextField()),
                ('aficionado', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='opinion_premio', to='usuario.Aficionado')),
                ('premio', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='opinion_premio', to='premio.Premio')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
