import Logo from "../assets/logo.png";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
        <span>Taskmate</span>
      </div>

      <div className="themeSelector">
        <div className="light"></div>
        <div className="medium"></div>
        <span className="dark activeTheme"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};
