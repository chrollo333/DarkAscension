import React, { useState, useEffect } from "react";
import "./UpArrow.css"; 
import upArrowImage from "../../assets/up-arrow.png";
const UpArrow = () => {
    const [isVisible, setIsVisible] = useState(false);
  
   
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
   
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <img src={upArrowImage} alt="Back to top" />
      </div>
    );
  };
  
  export default UpArrow;