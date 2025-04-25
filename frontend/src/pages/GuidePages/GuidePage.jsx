import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";
import Basics from './tabs/Basics'
import Consumables from './tabs/Consumables'
import Rotation from './tabs/Rotation'
import Stats from './tabs/Stats'
import Talents from './tabs/Talents'
import "./GuidePage.css"


const GuidePage = () => {
  const { spec } = useParams(); // Get specialization from URL
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Basics");

  const tabs = ["Basics", "Talents", "Rotation", "Stats", "Consumables"];
  useEffect(() => {
    gsap.fromTo(".tab-content", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
  }, [activeTab]);

  useEffect(() => {
    if (window.$WowheadPower) {
      window.$WowheadPower.refreshLinks(); //makes sure to refresh wowhead links by calling the function for the icons to work after changing the spec prop
    }
  }, [spec]);
  useEffect(() => {
    if (window.$WowheadPower) {
      window.$WowheadPower.refreshLinks(); //makes sure to refresh wowhead links by calling the function for the icons to work after changing a tab 
    }
  }, [activeTab]);

  return (
    <div className="guide-page">
      <div className="specialization-selection">
        <h1>{spec.charAt(0).toUpperCase() + spec.slice(1)} Guide 🎓</h1>
        <div className="spec-buttons">
          <button onClick={() => navigate("/guides/archon")} className={spec === "archon" ? "active" : ""} id="archon">
            Archon
          </button>
          <button onClick={() => navigate("/guides/voidweaver")} className={spec === "voidweaver" ? "active" : ""} id="voidweaver">
            Voidweaver
          </button>
        </div>
      </div>


      <div className="tab-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>


      <div className="tab-content">
        {activeTab === "Basics" && <Basics spec={spec} />}
        {activeTab === "Talents" && <Talents spec={spec} />}
        {activeTab === "Rotation" && <Rotation spec={spec} />}
        {activeTab === "Stats" && <Stats spec={spec} />}
        {activeTab === "Consumables" && <Consumables spec={spec} />}
      </div>
    </div>
  );
};

export default GuidePage;