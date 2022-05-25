from rest_framework.response import Response
from rest_framework.views import APIView
from apps.users.api.serializers import UserSerializer
from apps.users.models import User

class UserAPIView(APIView):
    def get(self,request):
        users = User.objects.all()
        # con el many = True se nos permite traer mas de un registro
        users_serializer = UserSerializer(users,many = True)
        return Response(users_serializer.data)
        