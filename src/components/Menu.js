import React from "react";
import Colors from "../constants/colors";
import Drop from "./Drop";
import Toggle from "./Toggle";
//import scribble18 from "../images/scribble18.png";
import scribble84 from "../images/scribbles-scribbles-98.png";

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
          <img src={scribble84} alt="Logo" width="150px" />
          <div className="drop">
            <Drop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
