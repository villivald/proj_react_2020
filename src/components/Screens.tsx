import { FunctionComponent } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";
import screens from "../data/screensData";

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
  const BlogPosts = screens.map((screen) => (
    <StyledPaper elevation={6} key={screen.id}>
      <a href={screen.url}>
        <img
          className="image"
          src={screen.logo}
          width="350px"
          height="290px"
          alt={`blog-post-${screen.id}-logo`}
        />
      </a>
    </StyledPaper>
  ));
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: -5 }}
      >
        <h1 className={props.statsHeaders}>The Latest Blog Posts</h1>
      </div>
      <div className={classes.root}>{BlogPosts}</div>
    </div>
  );
};

export default Screens;
