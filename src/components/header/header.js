import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm </h5>
        <h1>Moaz Gad</h1>
        <h5 className="text-light">Web Geek</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a className="scroll__down" href="#contact">
          scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
