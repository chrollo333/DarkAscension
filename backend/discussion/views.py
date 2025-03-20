from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Discussion
from .serializers import DiscussionSerializer


@api_view(['GET', 'POST'])
def discussion_list(request):
    #this displays last 10 discussion comments
    if request.method == 'GET':
        discussions = Discussion.objects.order_by('-created_at')[:10] #last 10 comments
        serializer = DiscussionSerializer(discussions, many=True)
        return Response(serializer.data)
    
    
    #this saves new discussion comments
    elif request.method == 'POST':
        serializer = DiscussionSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    