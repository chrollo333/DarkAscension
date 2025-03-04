import React, { useEffect, useState, useRef } from "react";
import "./Home.css"
import IntroView from "./components/IntroView";
import AboutSection from "./components/AboutSection";
import PanelFooter from "./components/Panels/PanelFooter";
import Navbar from "../../global/Navbar/Navbar";
const Home = () => {


  return (
    <>
      <div className="home-container">
        <IntroView />
        <AboutSection />
        <div className="panel-container" >
          <PanelFooter /> </div>
      </div>
    </>
  );
};

export default Home;