import React, { useState } from 'react';
import './Panel.css';
import { Link } from 'react-router-dom';


const Panel = ({ image, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <Link to={link} className="panel-link">
      <div
        className={`panel ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="panel-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="panel-label">{title}</div>
        {isHovered && <div className="panel-description">{description}</div>}
      </div>
    </Link>
  );
};

export default Panel;