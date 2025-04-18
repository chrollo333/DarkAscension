import React, { useEffect } from 'react';
import "./GuideSelection.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const GuideSelection = () => {

    return (
        <div className="guide-selection">
            <Link to="/guides/archon" className="guide-link archon-link">
                    <img src="../../../../src/assets/specs/archon.jpg" alt="Archon" />
            </Link>
            
            <Link to="/guides/voidweaver" className="guide-link voidweaver-link">  
                    <img src="../../../../src/assets/specs/voidweaver.jpg" alt="Voidweaver"/>     
            </Link>
        </div>
    )

};



export default GuideSelection;