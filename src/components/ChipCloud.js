import React from "react";
import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Colors from "../constants/colors";

//Icons
import html from "../images/html.webp";
import css from "../images/css.webp";
import js from "../images/js.webp";
import react from "../images/react.webp";
import wp from "../images/wp.webp";
import sql from "../images/sql.webp";
import git from "../images/git.webp";
import github from "../images/github.webp";
import bash from "../images/bash.webp";
import php from "../images/php.webp";

const ChipCloud = (props) => {
  const StyledChip = withStyles({
    root: {
      backgroundColor: props.ChipColor,
      color: Colors.whiteSmoke,
      fontFamily: "Mate, serif",
    },
  })(Chip);
  return (
    <div className="chip-grid">
      <StyledChip
        avatar={<Avatar alt="html logo" src={html}></Avatar>}
        label="HTML"
      />
      <StyledChip
        avatar={<Avatar alt="css logo" src={css}></Avatar>}
        label="CSS"
      />
      <StyledChip
        avatar={<Avatar alt="js logo" src={js}></Avatar>}
        label="JavaScript"
      />
      <StyledChip
        avatar={<Avatar alt="react logo" src={react}></Avatar>}
        label="React"
      />
      <StyledChip
        avatar={<Avatar alt="react logo" src={react}></Avatar>}
        label="React Native"
      />
      <StyledChip
        avatar={<Avatar alt="wordpress logo" src={wp}></Avatar>}
        label="WordPress"
      />
      <StyledChip
        avatar={<Avatar alt="sql logo" src={sql}></Avatar>}
        label="SQL"
      />
      <StyledChip
        avatar={<Avatar alt="git logo" src={git}></Avatar>}
        label="Git"
      />
      <StyledChip
        avatar={<Avatar alt="github logo" src={github}></Avatar>}
        label="GitHub"
      />
      <StyledChip
        avatar={<Avatar alt="github logo" src={bash}></Avatar>}
        label="Bash"
      />
      <StyledChip
        avatar={<Avatar alt="github logo" src={php}></Avatar>}
        label="PHP"
      />
    </div>
  );
};

export default ChipCloud;
