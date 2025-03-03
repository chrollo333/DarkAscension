import React from "react";
import "../styles/Home.css"
const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="intro-view">
        <h1 className="title">DARK ASCENSION</h1>
        <p className="scroll-down">▼ Scroll Down ▼</p>
        </section>


        <section className="about-section">
        <img src="../src/assets/xalatath.png" alt="Xal'atath" className="xalatath" />
        <div className="about-content">
          <p className="about-text">
            Combining my newfound love for playing Shadow Priest and coding, I decided on making a place that will help anybody willing to learn find their true potential.
            Be it you're just starting to learn the ropes, trying to find pieces of information or trying to perfect your gameplay, you will surely find the information here useful.
            It's time for you to 
          </p>
          <button>ASCEND</button>
        </div>
      </section>
      </div>
    </>
  );
  };
  
  export default Home;