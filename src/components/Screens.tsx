import { FunctionComponent } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";
import logo16 from "../images/16.webp";
import logo15 from "../images/15.webp";
import logo14 from "../images/14.webp";

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

const Screens: FunctionComponent<{ statsHeaders: string }> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={props.statsHeaders}>The Latest Blog Posts</h1>
      <div className={classes.root}>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-15-best-developer-resources-part2/">
            <img
              className="image"
              src={logo16}
              width="350px"
              height="290px"
              alt="blog-post-16-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-15-web-development-blogs/">
            <img
              className="image"
              src={logo15}
              width="350px"
              height="290px"
              alt="blog-post-15-logo"
            />
          </a>
        </StyledPaper>
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
      </div>
    </div>
  );
};

export default Screens;
