import React from "react";
import Toggle from "./Toggle";
import logo from "../images/logo/103.png";
import Dropdown from "../components/Dropdown";
import { Frame } from "framer";

const Menu = () => {
  const handleClick = () => {
    window.parent.location = window.parent.location.href;
  };
  const variants = {
    variantA: { scale: 1, rotate: 0 },
    variantB: { scale: 1.2, rotate: 90 },
  };

  return (
    <div className="stickyHeader">
      <div className="wrapper">
        <div className="menu">
          <div className="switch">
            <Toggle />
          </div>
          <div className="header" onClick={handleClick}>
            <Frame
              initial={"variantA"}
              whileHover={"variantB"}
              variants={variants}
              size={150}
              radius={30}
              background={"hsla(0, 100%, 50%, 0)"}
            >
              <img className="logo" src={logo} alt="Logo" width="150px" />
            </Frame>
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
