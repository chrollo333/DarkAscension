import { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";
import "./NewsFeed.css"
const NewsFeed = () => {
    const [news, setNews] = useState([]);

    

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/news/")
            .then((res) => res.json())
            .then((data) => setNews(data))  
            .catch((err) => console.error("Error fetching news:", err));
    }, []);


    const sanitizeDescription = (description) => {

        return sanitizeHtml(description, {
            allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'border' ], // You can customize the allowed tags
            allowedAttributes: {
                'a': [ 'href' ], // Allow 'href' attribute in <a> tags
            },
            allowedIframeHostnames: ['www.youtube.com'], // If you need to allow embedded iframes from specific sites

        });
        
    };


    return (
        <div className="news-feed">
            <h2 className="feed-title">LATEST NEWS</h2>
            {news.map((article, index) => (
                <div key={index} className="news-article">
                    <h3 className="article-title">
                        <a href={article.link} className="article-link">
                            {article.title}
                        </a>
                        
                    </h3>
                    <p className="article-description" dangerouslySetInnerHTML={{ __html: sanitizeDescription(article.description) }}/>
                    {article.image_url && <img src={article.image_url} alt={article.title} className="article-image" />}
                    <small className="article-date">
                        {new Date(article.pub_date).toLocaleDateString()}
                    </small>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;