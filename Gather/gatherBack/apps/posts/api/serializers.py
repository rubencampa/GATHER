from unittest.util import _MAX_LENGTH
from rest_framework import serializers
from apps.posts.models import Post,Tema
from apps.users.api.serializers import UserSerializer
# Tranforman Modelos o Entidades a un formato JSON

# Serializador en base a un modelo
class PostSerializer(serializers.ModelSerializer):
    
    userid = UserSerializer()
    class Meta:
        model = Post
        # Escogo los campos de la tabla con los que deseo trabajar en los api_views
        fields = ('id', 'userid', 'tema', 'titulo', 'tipoPost', 'contenido', 'rutaImgPost')

class TemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tema
        # Escogo los campos de la tabla con los que deseo trabajar en los api_views
        fields = '__all__'


# Similar a DTOS de Spring en los que en vez de realizar peticiones directamente manipulando la entidad
# o modelo creas una clase intermedia por seguridad en el manejo de los datos y flexibilidad en cuanto 
# los tipos de datos asignados

# class TestUserSerializer(serializers.Serializer):
#     id = serializers.CharField(max_lengh = 255)
#     # Puedo crear métodos para crear validaciones de los datos asignados
#     def validate__attr(self,value):
        # if (ocurre error):
            # raise serializers.ValidationError('Mensaje de error que eliga')
        # return value
