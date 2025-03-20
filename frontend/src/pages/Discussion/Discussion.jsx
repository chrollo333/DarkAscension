import { useState } from "react";

const FeedbackForm = () => {
    const [nickname, setNickname] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const feedbackData = {
            nickname: anonymous ? "Anonymous" : nickname,
            message,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/feedback/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(feedbackData),
            });

            if (response.ok) {
                setSuccess("Feedback submitted successfully!");
                setNickname("");
                setMessage("");
                setAnonymous(false);
            } else {
                setSuccess("Failed to submit feedback.");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setSuccess("An error occurred.");
        }
    };

    return (
        <div>
            <h2>Leave Your Feedback</h2>
            {success && <p>{success}</p>}
            <form onSubmit={handleSubmit}>
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
                    Feedback:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;