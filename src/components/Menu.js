import React from "react";
import Colors from "../constants/colors";
import Drop from "./Drop";
import Toggle from "./Toggle";
import logo from "../images/logo/103.png";

const Menu = (props) => {
  const changeTextColor = (e) => {
    e.target.style.color = Colors.accent;
  };
  const setTextColorToDefault = (e) => {
    e.target.style.color = "#333";
  };
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
          <div
            className="header"
            onMouseOver={changeTextColor}
            onMouseLeave={setTextColorToDefault}
            onClick={handleClick}
          >
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
