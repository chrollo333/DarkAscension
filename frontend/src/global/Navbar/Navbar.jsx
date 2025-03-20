import React from 'react';
import "./Navbar.css";

const Navbar = () => {




    return (
        <nav className="navbar">
            <a href="/" className="nav-link">HOME</a>
            <a href="/guides" className="nav-link">GUIDES</a>
            <a href="/news" className="nav-link">NEWS</a>
            <a href="/feedback" className="nav-link">DISCUSSION</a>
        </nav>




    );
};

export default Navbar;