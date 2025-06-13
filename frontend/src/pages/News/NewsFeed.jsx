import { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";
import "./NewsFeed.css"
const NewsFeed = () => {
    const [news, setNews] = useState([]);

    

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/news/`)
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
            allowedIframeHostnames: ['www.youtube.com'], 

        });
        
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
    };
    return (
        <div className="news-feed">
            <h2 className="feed-title">LATEST NEWS 🗞️</h2>
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
                        <p className="article-date">{formatDate(article.pub_date)}</p>
                    </small>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;