import React from "react";
import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Colors from "../constants/colors";
import html from "../images/html.webp";
import css from "../images/css.webp";
import js from "../images/js.webp";
import react from "../images/react.webp";
import wp from "../images/wp.webp";
import sql from "../images/sql.webp";
import git from "../images/git.webp";
import github from "../images/github.webp";

const StyledChip = withStyles({
  root: {
    backgroundColor: Colors.header,
    color: Colors.whiteSmoke,
    fontFamily: "Mate, serif",
  },
})(Chip);

const ChipCloud = () => {
  return (
    <div className="chip-grid">
      <StyledChip avatar={<Avatar src={html}></Avatar>} label="HTML" />
      <StyledChip avatar={<Avatar src={css}></Avatar>} label="CSS" />
      <StyledChip avatar={<Avatar src={js}></Avatar>} label="JavaScript" />
      <StyledChip avatar={<Avatar src={react}></Avatar>} label="React" />
      <StyledChip avatar={<Avatar src={react}></Avatar>} label="React Native" />
      <StyledChip avatar={<Avatar src={wp}></Avatar>} label="WordPress" />
      <StyledChip avatar={<Avatar src={sql}></Avatar>} label="SQL" />
      <StyledChip avatar={<Avatar src={git}></Avatar>} label="Git" />
      <StyledChip avatar={<Avatar src={github}></Avatar>} label="GitHub" />
    </div>
  );
};

export default ChipCloud;
