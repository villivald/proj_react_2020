import React from "react";
import Toggle from "./Toggle";
import logo from "../images/logo/103.png";
import Dropdown from "../components/Dropdown";

const Menu = () => {
  const handleClick = () => {
    window.parent.location = window.parent.location.href;
  };

  return (
    <div className="stickyHeader">
      <div className="wrapper">
        <div className="menu">
          <div className="switch">
            <Toggle />
          </div>
          <div className="header" onClick={handleClick}>
            <img className="logo" src={logo} alt="Logo" width="150px" />
          </div>
          <div className="drop">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
