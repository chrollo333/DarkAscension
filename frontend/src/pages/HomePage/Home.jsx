import React, { useEffect, useState, useRef } from "react";
import "./Home.css"
import IntroView from "./components/IntroView";
import AboutSection from "./components/AboutSection";
import PanelFooter from "./components/Panels/PanelFooter";

const Home = () => {
 const aboutSectionRef = useRef(null);

  return (
    <>
      <div className="home-container">
        <IntroView aboutSectionRef={aboutSectionRef}/>
        <AboutSection ref={aboutSectionRef}/>
        <div className="panel-container" >
          <PanelFooter /> </div>
      </div>
    </>
  );
};

export default Home;