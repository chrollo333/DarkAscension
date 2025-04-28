import React, { forwardRef } from "react";
import "../Home.css";
import xalatath from "/src/assets/xalatath.png";
const AboutSection = forwardRef((props, ref) => {



  return (
    <section ref={ref} className="about-section">
      <img
        src={xalatath}
        alt="Xal'atath"
        className="xalatath"
      />
      <div className="about-content">
        <p className="about-text">
          Combining my newfound love for playing Shadow Priest and coding, I decided on making a place that will help anybody willing to learn find their true potential.
          <br />
          Be it you're just starting to learn the ropes, trying to find pieces of information, or trying to perfect your gameplay, you will surely find the information here useful.
          <br />
          <br />It's time for you to
        </p>
        <a href="/guides" className="ascend-button">
          ASCEND
        </a>
      </div>
    </section>
  );
});

export default AboutSection;