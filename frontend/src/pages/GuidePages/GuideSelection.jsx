import React from 'react';
import "./GuideSelection.css";
import { Link } from 'react-router-dom';

const GuideSelection = () => {


    return (
        <div className="guide-selection">
            <div className="archon">
            <Link to="/guides/archon" className="guide-link">
                    <img src="../../../../src/assets/specs/archon.jpg" alt="Archon" />
            </Link>
            </div>
        <div className="voidweaver">
            <Link to="/guides/voidweaver" className="guide-link">  
                    <img src="../../../../src/assets/specs/voidweaver.jpg" alt="Voidweaver"/>
            </Link>
        </div>
        </div>
    )

};



export default GuideSelection;