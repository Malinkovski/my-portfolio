import React from "react";
import Skills from "../layouts/Skills";
import { about, skillsBar, section2title } from "../../db";
import image from "../../images/neon.png";

const About = () => {
  return (
    <div data-aos="zoom-in-up" id="about" className="about-section ">
      <div data-aos="zoom-in-up" className="row about-content">
        <div className="col-12 col-md-4 Photo">
          <img className="neon-img" src={image} alt="neon" />
        </div>
        <div className="col-12 col-md-6 about text-center">
          <div data-aos="zoom-in-up" className="title-box neon-purple">
            <h2>{section2title}</h2>
          </div>
          <p className="lead about-text">{about.paragraph}</p>
        </div>
      </div>
      <div id="Skills">
        <div className="row d-flex justify-content-center skills">
          {skillsBar.map((skill) => (
            <Skills
              key={skill.name}
              svg={skill.svg}
              viewBox={skill.viewBox}
              label={skill.name}
            />
          ))}
        </div>  
      </div>
    </div>
  );
};

export default About;
