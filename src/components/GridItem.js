import React from "react";
import Colors from "../constants/colors";
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
}));

const GridItem = (props) => {
  const classes = useStyles();

  const changeBackground = (e) => {
    e.target.style.background = Colors.buttonBackground;
    e.target.style.color = Colors.gray;
    //e.target.style.boxShadow = `4px 4px ${props.hoverColor}`;
    e.target.style.transform = "scale(1.1)";
  };
  const setBackgroundToDefault = (e) => {
    e.target.style.background = props.afterHover;
    e.target.style.color = "white";
    //e.target.style.boxShadow = `4px 4px ${props.color}`;
    e.target.style.transform = "";
  };
  const handlePress = (e) => {
    e.target.style.transform = "translate(3px,6px)";
    window.location.href = props.link;
  };
  return (
    <div className="button-box">
      <button
        className="button"
        style={props.boxStyle}
        onMouseOver={changeBackground}
        onMouseLeave={setBackgroundToDefault}
        onClick={handlePress}
      >
        {props.text}
        <Avatar
          src={props.image}
          className={classes.small}
          alt={`${props.alt} logo`}
        />
      </button>
    </div>
  );
};

export default GridItem;
