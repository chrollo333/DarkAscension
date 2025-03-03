import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css"
import githubIcon from "../assets/github.svg"; 
import discordIcon from "../assets/discord.svg"; 


const Home = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(1 - window.scrollY / 400, 0);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <div className="home-container">
        <section className="intro-view">
        <h1 className="title">DARK ASCENSION</h1>
        <a className="scroll-down" style={{ opacity: scrollOpacity }} onClick={ handleScrollToAbout }>▼ Scroll Down ▼</a>
        </section>


        <section className="about-section" ref={aboutSectionRef}>
        <img src="../src/assets/xalatath.png" alt="Xal'atath" className="xalatath" />
        <div className="about-content">
          <p className="about-text">
            Combining my newfound love for playing Shadow Priest and coding, I decided on making a place that will help anybody willing to learn find their true potential.
            <br></br>Be it you're just starting to learn the ropes, trying to find pieces of information or trying to perfect your gameplay, you will surely find the information here useful.
            <br></br><br></br>It's time for you to 
          </p>
          <a href="/guide" className="ascend-button">ASCEND</a>
        </div>
        </section>
      <section className="bottom-section">
      <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="link">
            <img src={githubIcon} alt="GitHub" className="icon" /> chrollo333
          </a>
          <a href="https://discordapp.com/users/232067112623931393" target="_blank" rel="noopener noreferrer" className="link"> 
            <img src={discordIcon} alt="Discord" className="icon" /> lucasxd1
          </a>
          </section>
      </div>
    </>
  );
  };
  
  export default Home;