import React, { useState } from 'react';
import './Panel.css';  // Create this CSS file for styles
import image from "../../../../assets/panels/shadow_panel.jpg";

const Panel = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

    title = "GUIDES";
    description = "yuuuuuuuuuuuuuuuuuuuuj";
  return (
    <div 
      className={`panel ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="panel-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="panel-label">{title}</div>
        <div className="panel-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Panel;