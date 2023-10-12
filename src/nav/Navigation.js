/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import eyeOfHorus from "../assets/eye-of-horus.png";
import magicCircle from "../assets/magic-circle.png";
import pyramids from "../assets/pyramids.png";
import scroll from "../assets/scroll.png";
import "../styles/nav.css";

export default Navigation() = () => {
    const location = useLocation();
    const getNavPosition = () => {
        switch (location.pathname) {
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };
    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return "ABOUT";
            case "/skills":
                return "SKILLS";
            case "/projects":
                return "PROJECTS";
            case "/contact":
                return "CONTACT";
            default:
                return "";
        }
    }
    const navPosition = getNavPosition();
    const pageTitle = getTitle();
    const isCurrentPage = (navClass) => {
        return navClass === navPosition;
    }
  render() {
    return (
      <div>
        <img src={eyeOfHorus} />
        <img src={magicCircle} />
        <img src={pyramids} />
        <img src={scroll} />
      </div>
    );
  }
}
