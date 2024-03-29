import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial"
import ME from "../../assets/me4.png";
function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Gokuldas Mp</h1>
        <h5 className="text-light">Devops Engineer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
