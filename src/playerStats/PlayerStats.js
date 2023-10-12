import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return (
        <div id="playerStats">
            <h1>EDWARD COOPER LEVEL 25</h1>
            <div id="playerStats__lines">
            <span id ="Player__lines__thick"></span>
            <span id ="Player__lines__thin"></span>
            <h2>Software Engineer</h2>
            </div>
        </div>
    );
};

export default PlayerStats;