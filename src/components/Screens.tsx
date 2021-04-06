import { FunctionComponent } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";
import logo19 from "../images/19.webp";
import logo18 from "../images/18.webp";
import logo17 from "../images/17.webp";

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
    backgroundColor: Colors.screens,
    borderRadius: 5,
  },
})(Paper);

const Screens: FunctionComponent<{ statsHeaders: string }> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: -5 }}
      >
        <h1 className={props.statsHeaders}>The Latest Blog Posts</h1>
      </div>
      <div className={classes.root}>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-10-web-dev-tools-04-2021/">
            <img
              className="image"
              src={logo19}
              width="350px"
              height="290px"
              alt="blog-post-19-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/18-top-10-web-dev-tools-03-2021/">
            <img
              className="image"
              src={logo18}
              width="350px"
              height="290px"
              alt="blog-post-18-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/becoming_a_web_developer/">
            <img
              className="image"
              src={logo17}
              width="350px"
              height="290px"
              alt="blog-post-17-logo"
            />
          </a>
        </StyledPaper>
      </div>
    </div>
  );
};

export default Screens;
