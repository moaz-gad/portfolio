/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
        href="#skills"
      >
        <BiBookBookmark />
      </a>
      <a
        onClick={() => setActiveNav("portfolio")}
        className={activeNav === "portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
export default Nav;
