import React, { useEffect, useState, useRef } from "react";
import "./Home.css"
import IntroView from "./components/IntroView";
import AboutSection from "./components/AboutSection";
import Panel from "./components/Panels/Panel";
const Home = () => {

  
  return (
    <>
      <div className="home-container">
      <IntroView />
      <AboutSection />
      <div className="panel-container" >
      <Panel /> </div>
      </div>
    </>
  );
  };
  
  export default Home;