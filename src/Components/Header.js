import React from "react";
import Image from "../images/362271347_1278039943078659_404882932871851310_n_enhanced.jpg";
import './Header.css';
export const Header = () => {
  return (
    <div className="headerContainer">
         <img  className="sites-image" src={Image} />
         <div>
         <h1 className="name">Rethabile Chomi</h1>
      <p className="Header-p">
        I am a passionate and dedicated frontend developer with experience in
        building user-focused applications using HTML, CSS, JavaScript, React,
        and Firebase.
      </p>
         </div>
     
    </div>
  );
};
