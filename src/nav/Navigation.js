import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import eyeOfHorus from "../assets/eye-of-horus.png";
import "../styles/nav.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <img src={eyeOfHorus} />
      </div>
    );
  }
}
