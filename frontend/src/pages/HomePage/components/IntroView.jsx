import React, { useState, useEffect, useRef } from "react";
import "../Home.css";

const IntroView = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(1 - window.scrollY / 400, 0);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="intro-view">
      <h1 className="title">DARK ASCENSION</h1>
      <a
        className="scroll-down"
        style={{ opacity: scrollOpacity }}
        onClick={handleScrollToAbout}
      >
        ▼ Scroll Down ▼
      </a>
    </section>
  );
};

export default IntroView;