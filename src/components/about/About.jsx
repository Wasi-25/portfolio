import React from 'react';
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
          </div>
          <p>I am Wasiullah Khalique, a enthusiastic Fullstack Web Developer. I create dynamic and engaging web applications. I am constantly seeking to expand my skillset and deliver innovative solutions to clients.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About