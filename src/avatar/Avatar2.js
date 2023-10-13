import React from 'react';
import PropTypes from "prop-types";
import avatarImage2 from "../assets/avatar-image1.png";
import "../styles/avatar.css";

const Avatar2 = ({ page }) => {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay-${page}`;

    return (
        <>
        <span className={spanClass}></span>
        <img src={avatarImage2} className={avatarClass} alt="avatar" />
        </>
    );
};

Avatar2.propTypes = {
    page: PropTypes.string.isRequired,
}

export default Avatar2;