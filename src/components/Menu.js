import React from "react";
import Colors from "../constants/colors";
import Drop from "./Drop";
import Toggle from "./Toggle";

const Menu = (props) => {
  const changeTextColor = (e) => {
    e.target.style.color = Colors.accent;
  };
  const setTextColorToDefault = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <div>
      <div className="wrapper">
        <div className="menu" style={{ backgroundColor: props.SuperColor }}>
          <div className="switch">
            <Toggle />
          </div>
          <div
            className="header"
            onMouseOver={changeTextColor}
            onMouseLeave={setTextColorToDefault}
          >
            PROJ
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
