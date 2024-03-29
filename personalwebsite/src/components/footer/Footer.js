import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
function Footer() {
  return (
    <footer>
      <h2><a href="#">GOKULDAS</a></h2>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
      <a href="https://www.instagram.com/"><FiInstagram/></a>
      <a href="https://twitter.com/"><IoLogoTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy;GOKULDAS. All rights reserved</small>
    </div>
    </footer>
  );
}

export default Footer;
