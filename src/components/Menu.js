import React from "react";
import Toggle from "./Toggle";
import logo from "../images/logo/103.webp";
import Dropdown from "../components/Dropdown";
import { Frame } from "framer";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Menu = (props) => {
  const handleClick = () => {
    window.parent.location = window.parent.location.href;
  };
  const variants = {
    variantA: { scale: 1, rotate: 0 },
    variantB: { scale: 1.2, rotate: 90 },
  };
  const classes = useStyles();

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
            style={{ display: props.ButtonDisplay }}
            className="theme-btn"
            onClick={() => {
              props.setMainStyle(!props.mainStyle);
            }}
          >
            <Avatar
              src={props.Pic}
              className={classes.large}
              alt={"dark theme button"}
            />
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
