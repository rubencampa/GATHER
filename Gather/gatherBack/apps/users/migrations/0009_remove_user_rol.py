# Generated by Django 4.0.3 on 2022-05-29 16:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_user_descripcion_alter_user_direccion_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='rol',
        ),
    ]
