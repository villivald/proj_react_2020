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
    <StyledPaper elevation={6} key={screen.id} tabIndex={0}>
      <a href={screen.url}>
        <img
          className="image"
          src={screen.logo}
          width="340px"
          height="300px"
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
      <h1
        className="devHashnode"
        tabIndex={0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className={props.statsHeaders}>Also available on</p>
        <a
          href="https://dev.to/villivald"
          className={props.statsHeaders}
          style={{
            textDecoration: "underline wavy #e11d74 5px",
            fontSize: "2.5rem",
            display: "inline",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Dev
        </a>
        <p className={props.statsHeaders}>&</p>
        <a
          href="https://proj.ninja"
          className={props.statsHeaders}
          style={{
            textDecoration: "underline wavy #e11d74 5px",
            fontSize: "2.5rem",
            display: "inline",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Hashnode
        </a>
      </h1>
      <div className={classes.root}>{BlogPosts}</div>
    </div>
  );
};

export default Screens;
