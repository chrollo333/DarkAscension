import React, { useEffect, useState } from "react";
import "./FloatingOrbs.css"; // Styles for animation

const FloatingOrbs = () => {
    const [orbs, setOrbs] = useState([]);

    useEffect(() => {
        const createOrb = () => {
            return {
                id: Math.random(), // Unique ID
                size: Math.random() * 10 + 5, // Random size (5px to 15px)
                left: Math.random() * 100, // Random position across the page
                animationDuration: Math.random() * 10 + 5, // Speed variation (5s to 15s)
                opacity: Math.random() * 0.5 + 0.5, // Random opacity (0.5 to 1)
            };
        };

        const interval = setInterval(() => {
            setOrbs((prevOrbs) => {
                const newOrbs = [...prevOrbs, createOrb()];

                // Keep a maximum number of orbs to prevent infinite growth
                return newOrbs.length > 30 ? newOrbs.slice(-30) : newOrbs;
            });
        }, 1000); // Generate a new orb every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-orbs">
            {orbs.map((orb) => (
                <div
                    key={orb.id}
                    className="orb"
                    style={{
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        left: `${orb.left}%`,
                        animationDuration: `${orb.animationDuration}s`,
                        opacity: orb.opacity,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default FloatingOrbs;