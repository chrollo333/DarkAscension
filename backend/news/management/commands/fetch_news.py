from django.core.management.base import BaseCommand
from news.utils import fetch_wowhead_news

class Command(BaseCommand):
    help = "Fetches news articles from the WoWHead RSS feed"
    
    def handle(self, *args, **kwargs):
        fetch_wowhead_news()
        self.stdout.write(self.style.SUCCESS("Sucessfully fetched news!"))