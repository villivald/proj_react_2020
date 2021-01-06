import React, { FunctionComponent } from "react";
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

interface IProps {
  afterHover: string;
  link: string;
  boxStyle: object;
  text: string;
  image: string;
  alt: string;
  color: string;
  afterHoverTextColor: string;
  onHoverTextColor: string;
  onHoverColor: string;
}

const GridItem: FunctionComponent<IProps> = (props) => {
  const classes = useStyles();

  const changeBackground = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    e.target.style.background = props.onHoverColor;
    e.target.style.color = props.onHoverTextColor;
    //e.target.style.boxShadow = `4px 4px ${props.hoverColor}`;
    e.target.style.transform = "scale(1.1)";
  };
  const setBackgroundToDefault = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    e.target.style.background = props.afterHover;
    e.target.style.color = props.afterHoverTextColor;
    //e.target.style.boxShadow = `4px 4px ${props.color}`;
    e.target.style.transform = "";
  };
  const handlePress = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
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
