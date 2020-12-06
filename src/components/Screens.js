import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";
import logo14 from "../images/14.webp";
import logo13 from "../images/13.webp";
import logo12 from "../images/12.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(43),
      height: theme.spacing(36),
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

const Screens = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={props.statsHeaders}>The Latest Blog Posts</h1>
      <div className={classes.root}>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/15-best-developer-resources-in-2020/">
            <img
              className="image"
              src={logo14}
              width="350px"
              height="290px"
              alt="blog-post-14-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-15-most-useful-tools-in-2020/">
            <img
              className="image"
              src={logo13}
              width="350px"
              height="290px"
              alt="blog-post-13-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-15-resources-to-learn-coding/">
            <img
              className="image"
              src={logo12}
              width="350px"
              height="290px"
              alt="blog-post-12-logo"
            />
          </a>
        </StyledPaper>
      </div>
    </div>
  );
};

export default Screens;
