import React from "react";
import TeamSpiritGraphic from "../../assets/graphics/undraw_team_spirit.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={TeamSpiritGraphic} alt="Team spirit" />
      </div>
      <div className="hero__text">
        <h1>Unlike any financial institution</h1>
        <p>
          Pawisor provides cuddly friends to help and support you on your
          financial journey.
        </p>
      </div>
    </div>
  );
}

export default Hero;
