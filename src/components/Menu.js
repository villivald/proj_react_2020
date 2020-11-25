import React from "react";
import Toggle from "./Toggle";
import logo from "../images/logo/103.png";
import Dropdown from "../components/Dropdown";
import { Frame } from "framer";
import { Link } from "react-router-dom";

const Menu = (props) => {
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
        <div className={props.menuStyle}>
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
              <Link to="/">
                <div>
                  <img className="logo" src={logo} alt="Logo" width="150px" />
                </div>
              </Link>
            </Frame>
          </div>
          <button
            className="theme-btn"
            onClick={() => {
              props.setMainStyle(!props.mainStyle);
            }}
          >
            <span role="img" aria-label="emoji">
              🌗
            </span>
          </button>
          <div className="drop">
            <Dropdown DropdownId={props.DropdownMenuStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
