from django.db import models

# Create your models here.
class NewsArticle(models.Model):
    title = models.CharField(max_length=255)
    link = models.URLField()
    description = models.TextField()
    pub_date = models.DateTimeField()
    image_url = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.title