import feedparser
import re
from datetime import datetime
from .models import NewsArticle

WOWHEAD_RSS_FEED = "https://www.wowhead.com/news/rss/all"

def fetch_wowhead_news():
    feed = feedparser.parse(WOWHEAD_RSS_FEED)
    print(f"Found {len(feed.entries)} articles.")  # debugging output
    
    
    
    for entry in feed.entries:
        
        title = entry.title
        link = entry.link
        description = entry.summary 
        pub_date = datetime(*entry.published_parsed[:6])
              
                # debug : printing structure
        print(entry)

        # Extract the image URL from the media:content tag manually by checking 'media_content'
        image_url = None

        # is 'media_content' available in the entry?
        if 'media_content' in entry:
            media_content = entry['media_content']
            if media_content:
                # sometimes 'media_content' is a list, first item accessed
                image_url = media_content[0].get('url')

        # Fallback: Try extracting image URL using regular expression from description or other fields
        if not image_url:
            # check if description contains image URL
            image_match = re.search(r'url="(https://wow.zamimg.com/.*?)"', description)
            if image_match:
                image_url = image_match.group(1)
                
        print(f"Image URL: {image_url}")  # debug - check if image_url is present

        # set a default or skip if no img found
        image_url = image_url if image_url else None
        
        #filtering, currently not for shadow priest so left open
        if " " in entry.title.lower() or " " in description:
            if not NewsArticle.objects.filter(title=title).exists():
                NewsArticle.objects.create(
                    title=title,
                    link=link,
                    description=description,
                    pub_date=pub_date,
                    image_url=image_url
                )            