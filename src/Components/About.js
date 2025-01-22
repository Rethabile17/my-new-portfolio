import React from "react";
import Skills from '../Components/Skill';
import  Code  from "../images/web developer.webp"
import './About.css'

function About() {
  return (
    <div className="AboutContainer">
      <h1>About me</h1>
      <div className="aboutInfo">
      <p className="About-p">
        During my journey at CodeTribe Academy, I honed my skills by developing
        projects such as a recipe app with CRUD functionality, a hotel booking
        system with admin features, and a portfolio website. I excel in creating
        responsive, functional, and visually appealing interfaces while
        integrating authentication, API handling, and state management. My goal
        is to grow as a full-stack developer, solve real-world problems through
        clean, maintainable code, and contribute to impactful projects.
      </p>
      <img className="about-image" src={Code} />   
      </div>
      <Skills/>
      
    </div>
  );
}

export default About;
