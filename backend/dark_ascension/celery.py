from celery import Celery
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dark_ascension.settings")

app = Celery("dark_ascension")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()

@app.task
def fetch_news_task():
    from news.utils import fetch_wowhead_news
    fetch_wowhead_news()