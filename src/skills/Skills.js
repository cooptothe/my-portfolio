import React, { Component } from 'react';
import Avatar2 from "../avatar/Avatar2.js";
import SkillsMenu from "./SkillsMenu.js"

export default class Skills extends Component {
  render() {
    return <>
    <Avatar2 page="skills" />
    <SkillsMenu />
    </>
  }
}
