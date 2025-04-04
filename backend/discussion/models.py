from django.db import models

# Create your models here.
class Discussion(models.Model):
    nickname = models.CharField(max_length=50, blank=True, null=True) #nickname is optional
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) 
    
    def __str__(self):
        return self.nickname if self.nickname else "Anonymous" #anonymous nickname if no nickname