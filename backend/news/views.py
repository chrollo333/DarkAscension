from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import NewsArticle
from .serializers import NewsArticleSerializer

@api_view(['GET'])
def news_list(request):
    articles = NewsArticle.objects.all().order_by("-pub_date")[:10]
    serializer = NewsArticleSerializer(articles, many=True)
    return Response(serializer.data) #formats the data automatically

