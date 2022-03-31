import React from "react";

import logo from "../images/logo.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="header__logo">
        <img alt="logo" src={logo} />
        <span>FeetWings</span>
      </p>
      <ul className="header__content">
        <li id="li1">Our Products</li>
        <li id="li2">Insights</li>
        <li id="li3">Smart Yarn</li>
        <li id="li4">About</li>
        <li id="li5">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
