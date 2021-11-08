import React from "react";
import "./Header.css";
import logo from "../../Img/Logo.png";

export const Header = () => {
  return (
    <header className="main-header">
      <img src={logo} alt="" className="main-header__logo" />
      <div className="main-header__menu">
        <a className="main-header__menu-link">How it works</a>
        <a className="main-header__menu-link">Pricing</a>
        <a className="main-header__menu-link__up">Request Beta</a>
      </div>
    </header>
  );
};
