import React from "react";
import TeamSpiritGraphic from "../../assets/graphics/undraw_team_spirit.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <div className="hero__text">
          <h1>Pawisor</h1>
          <p>Our friendliest and fluffiest financial advisors at Voyant</p>
        </div>
        <img src={TeamSpiritGraphic} alt="Team spirit" />
      </div>
    </div>
  );
}

export default Hero;
