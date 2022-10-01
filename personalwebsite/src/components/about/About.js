import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutMe" />
          </div>
        </div>
        <div className="about__content">
          <div className="about___cards">
            <article className="about___card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.6+ years working</small>
            </article>
          </div>
          <p>
            A bachelor degree holder with 1.6+ years of experience in the field
            DevOps Automation with a demonstrated history of working in the
            information technology and services industry. Skilled in DevOps
            tools and Web development
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
