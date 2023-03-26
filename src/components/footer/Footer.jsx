import React from 'react';
import "./footer.css";
import {BsLinkedin} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Wasiullah Khalique</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/wasiullah-khalique-71a10a1a6/"  target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/wasi_x_25/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/hellowasi" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wasiullah Khalique. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer