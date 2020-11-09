import React from "react";
import GoodDoggyGraphic from "../../assets/graphics/undraw_good_doggy.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <div className="hero__text">
          <h1>Pawisor</h1>
          <p>Our friendliest and fluffiest financial advisors at Voyant</p>
        </div>
        <img src={GoodDoggyGraphic} />
      </div>
    </div>
  );
}

export default Hero;
