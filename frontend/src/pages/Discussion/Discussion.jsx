import { useState, useEffect } from "react";
import "./Discussion.css"
const Discussion = () => {
    const [nickname, setNickname] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const [content, setContent] = useState("");
    const [comments, setComments] = useState([]);
    const [success, setSuccess] = useState(null);
    const [created_at, setCreatedAt] = useState("");
    // Fetch comments when the component loads
    useEffect(() => {
        fetchComments();
    }, []);

    // Fetch latest comments from the backend
    const fetchComments = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/discussion/");
            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                console.error("Failed to fetch comments");
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    // Submit a new comment
    const handleSubmit = async (e) => {
        e.preventDefault();

        const discussionData = {
            nickname: anonymous ? null : nickname, // Null means anonymous
            content,
            created_at,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/discussion/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(discussionData),
            });

            if (response.ok) {
                setSuccess("Comment submitted successfully!");
                setCreatedAt("");
                setNickname("");
                setContent("");
                setAnonymous(false);
                fetchComments(); // Refresh the comments after submission
            } else {
                setSuccess("Failed to submit comment.");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            setSuccess("An error occurred.");
        }
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
    };

    return (
        <div className="discussion-body">
            <h2>Discussion</h2>

            {/* Success/Error message */}
            {success && <p>{success}</p>}

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="form-submit">
                <label>
                    Nickname:
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        disabled={anonymous}
                        required={!anonymous}
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={() => setAnonymous(!anonymous)}
                    />
                    Stay Anonymous
                </label>
                <label>
                    Comment:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

           
            <h3>Latest Comments</h3>
            <ul className="comment">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{formatDate(comment.created_at)}</p><strong>{comment.nickname || "Anonymous"}:</strong> {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Discussion;