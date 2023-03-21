import React from "react";

import Header from "../Header/Header";

import textImage from "../../assets/herosection__text.svg";
import child from "../../assets/herosection__image.svg";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="container">
        <Header />
        <div className="herosection">
          <div className="herosection__left">
            <img src={textImage} alt="Text" className="herosection__left-img" />
            <p className="herosection__left-content">
              Water is essential for all life on Earth
              <br />
              Without it, there would be no rebirth <br /> To conserve water is
              crucial for our future
              <br />
              We must use it wisely, to ensure our survival for sure.
            </p>
          </div>
          <div className="herosection__right">
            <img
              src={child}
              alt="A small kid drinking water"
              className="herosection__right-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
