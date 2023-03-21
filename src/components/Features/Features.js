import React from "react";
import { Link } from "react-router-dom";

import "./Features.css";

import feature1 from "../../assets/feature1.svg";
import feature2 from "../../assets/feature2.svg";
import feature3 from "../../assets/feature3.svg";

const Features = () => {
  return (
    <>
      <section className="container">
        <div className="feature">
          <h1>features</h1>
          <div className="content">
            <a
              href="https://neerjal-waterlevell.streamlit.app/"
              className="feature_img"
            >
              <img src={feature1} alt="Feature 1" style={{ width: "100%" }} />
            </a>
            <a
              href="https://neerjal-boreleveli.streamlit.app/"
              className="feature_img"
            >
              <img src={feature2} alt="Feature 2" style={{ width: "100%" }} />
            </a>
            <Link to="/book" className="feature_img">
              <img src={feature3} alt="Feature 3" style={{ width: "100%" }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
