import React from 'react';
import ImageNav from "../images/rethabile chomi.jpg";
import './nav.css';

function Nav() {
  return (
    <nav className="navbar">
       <img className="Nav-logo-image" src={ImageNav} alt="Logo" />
      <ul className="navbar__links">
        <li className="navbar__link"><a href="#home">Home</a></li>
        <li className="navbar__link"><a href="#projects">Projects</a></li>
        <li className="navbar__link"><a href="#skills">Skills</a></li>
        <li className="navbar__link"><a href="#about">About</a></li>
        <li className="navbar__link"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
