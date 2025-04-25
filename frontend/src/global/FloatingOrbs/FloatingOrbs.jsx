import React, { useEffect, useState } from "react";
import "./FloatingOrbs.css"; // Styles for animation

const FloatingOrbs = () => {
    const [orbs, setOrbs] = useState([]);

    useEffect(() => {
        const createOrb = () => {
            return {
                id: Math.random(),
                size: Math.random() * 5 + 2,
                left: Math.random() * 100, //position
                animationDuration: Math.random() * 10 + 5, // speed variations from 5 to 15s
                opacity: Math.random() * 0.5 + 0.5,
            };
        };

        const interval = setInterval(() => {
            setOrbs((prevOrbs) => {
                const newOrbs = [...prevOrbs, createOrb()];

                // this keeps a maximum number of orbs (to prevent infinite orbs)
                return newOrbs.length > 30 ? newOrbs.slice(-30) : newOrbs;
            });
        }, 1000); // generates a new one every second

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