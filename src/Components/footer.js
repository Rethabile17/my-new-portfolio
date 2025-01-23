import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import ImageName from "../images/rethabile chomi.jpg";
import "./footer.css";

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_8v8fnt7',
        'template_0tqfh2k',
        formData,
        'De-I5KLnpq_vffJhu'
      )
      .then(
        (result) => {
          alert('Feedback sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send feedback. Please try again.');
        }
      );
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-logo-image" src={ImageName} alt="Logo" />
        <p>
          <FontAwesomeIcon icon={faCopyright} /> All Rights Reserved 2025
        </p>
      </div>

      <div className="footer-contact">
        <h2>Contact</h2>
        <p>Email: rethabilechomi610@gmail.com</p>
        <p>Phone: +27 68210 4225</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>

      <div className="footer-location">
        <h2>Location</h2>
        <p>Kimberley</p>
      </div>

      <div className="footer-email">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
