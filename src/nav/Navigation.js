import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import eyeOfHorus from "../assets/eye-of-horus.png";
import magicCircle from "../assets/magic-circle.png";
import pyramids from "../assets/pyramids.png";
import scroll from "../assets/scroll.png";
import "../styles/nav.css";

export default class Navigation extends Component {
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
