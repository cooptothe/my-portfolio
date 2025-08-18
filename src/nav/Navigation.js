/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import eyeOfHorus from "../assets/eye-of-horus.png";
import key from "../assets/key.png";
import pyramids from "../assets/pyramids.png";
import scroll from "../assets/scroll.png";
import "../styles/nav.css";

export default function Navigation() {
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
    };

    const navPosition = getNavPosition();
    const pageTitle = getTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPosition;
    };

    const renderNavLink = (to, imgSrc, altText, navClass, title) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
        
        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText} />
                <h1 className="page-title">{title}</h1>
            </Link>
        );
    };

    return (
        <nav className={`nav ${navPosition}`}>
            {renderNavLink(
                "/",
                eyeOfHorus,
                "eye of horus icon",
                "nav-about",
                "ABOUT"
            )}
            {renderNavLink(
                "/skills",
                key,
                "key icon",
                "nav-skills",
                "SKILLS"
            )}
            {renderNavLink(
                "/projects",
                pyramids,
                "pyramids icon",
                "nav-projects",
                "PROJECTS"
            )}
            {renderNavLink(
                "/contact",
                scroll,
                "scroll icon",
                "nav-contact",
                "CONTACT"
            )}
        </nav>
    );
}
