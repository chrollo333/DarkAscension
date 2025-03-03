import React from "react";
import githubIcon from "../../assets/github.svg";
import discordIcon from "../../assets/discord.svg";
import "./AuthorLinks.css";

const AuthorLinks = () => {
  return (
    <section className="author-links">
      <a href="https://github.com/chrollo333" target="_blank" rel="noopener noreferrer" className="link">
        <img src={githubIcon} alt="GitHub" className="icon" /> chrollo333
      </a>
      <a href="https://discordapp.com/users/232067112623931393" target="_blank" rel="noopener noreferrer" className="link">
        <img src={discordIcon} alt="Discord" className="icon" /> lucasxd1
      </a>
    </section>
  );
};

export default AuthorLinks;