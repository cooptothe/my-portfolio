import React, { useState } from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;
  const maxCharacters = 200; // Set your desired character limit

  // State to track whether the content should be fully expanded
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // CSS class for p-container, which enables scrolling
  const pContainerClass = classNames("p-container", {
    "scrollable-content": !expanded,
  });

  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className={pContainerClass}>
        <p>{content}</p>
        {content.length > maxCharacters && (
          <div className="p-scroll" onClick={toggleExpanded}>
            {expanded ? "Show Less" : "Show More"}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSubheading;
