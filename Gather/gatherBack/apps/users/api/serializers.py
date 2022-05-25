from rest_framework import serializers
from apps.users.models import User
# Tranforman Modelos o Entidades a un formato JSON
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # exclude