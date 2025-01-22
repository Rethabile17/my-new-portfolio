import React from 'react';
import ImageName from "../images/rethabile_chomi-removebg-preview.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-logo-image" src={ImageName} alt="Logo" />
      </div>

      <div className="footer-contact">
        <h2>Contact</h2>
        <p>Email: rethabilechomi610@gmail.com</p>
        <p>Phone: +27 68210 4225</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="footer-location">
        <h2>Location</h2>
        <p>Kimberley</p>
      </div>
    </div>
  );
}

export default Footer;
