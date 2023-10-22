import React, { Component } from "react";
import classNames from "classnames";
import "../styles/skillsMenu.css";
import skills from "./skillsData.js";
import frontendIcon from "../assets/serpent-emblem.png";
import backendIcon from "../assets/hermes-emblem.png";

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  renderContent(skills) {
    return skills.map((skill, index) => (
      <div
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <div className="level-container">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`level-point ${i < skill.level ? "filled" : "unfilled"}`}
          ></div>
        ))}
        </div>
      </div>
    ));
  }
}
