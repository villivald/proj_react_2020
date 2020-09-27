import React from "react";
import Drop from "./Drop";
import Toggle from "./Toggle";
import logo from "../images/logo/103.png";

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
            <Drop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
