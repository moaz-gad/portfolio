import React from "react";
import "./footer.css";
import Portfolio from "./../portfolio/portfolio";
import { FaLinkedin, FaGithubAlt, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a className="footer__logo" href="#">
        moaz gad
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a target="_blank" href="https://linkedin.com/in/moazgad">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/moaz-gad">
          <FaGithubAlt />
        </a>
        <a target="_blank" href="https://facebook.com/moazelgad">
          <FaFacebookF />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;moaz gad all rights reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
