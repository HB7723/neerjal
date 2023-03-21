import React from "react";

import "./Header.css";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <ul className="header__links">
          <li>features</li>
          <li>contact us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
