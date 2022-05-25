from django.db import models

class Post(models.Model):
    id = models.IntegerField('Post Id', unique = True, primary_key=True)
    userid = models.IntegerField('User Id', unique = False)
    tema = models.CharField('Tema Post',max_length=50, unique = True)
    titulo = models.CharField('Titulo Post', max_length=50)
    tipoPost = models.IntegerField('Tipo de post')
    contenido = models.CharField('Contenido del post',max_length=255)
    rutaImgPost = models.ImageField('Imagen de perfil', upload_to='imgPost/', max_length=255, null=True, blank = True)

class Tema(models.Model):
    id = models.IntegerField('Id Tema', unique = True, primary_key=True)
    nombre = models.CharField('Tema nombre',max_length=50, unique = True)

class TipoPost(models.Model):
    id = models.IntegerField('Id Tipo Post', unique = True, primary_key=True)
    nombre = models.CharField('Tipo Post nombre',max_length=50, unique = True)
    
