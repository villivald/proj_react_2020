import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(48),
      height: theme.spacing(26),
    },
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 50,
  },
}));

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
    //backgroundColor: "",
    backgroundColor: Colors.screens,
    borderRadius: 5,
  },
})(Paper);

const Screens = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StyledPaper elevation={6} />
      <StyledPaper elevation={6} />
      <StyledPaper elevation={6} />
    </div>
  );
};

export default Screens;
