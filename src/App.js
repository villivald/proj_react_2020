import React from "react";
import Grid from "./components/Grid";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Screens from "./components/Screens";
import Timelines from "./components/Timeline";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "antd/dist/antd.css";
import { Progress } from "antd";
import ChipCloud from "./components/ChipCloud";
import Colors from "./constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: theme.spacing(68),
      height: theme.spacing(46),
      backgroundColor: Colors.whitesmoke,
    },
  },
}));

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
    backgroundColor: "",
    borderRadius: 5,
  },
})(Paper);

const styles = {
  timeline: {
    display: "flex",
    marginTop: "2%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timelines: {
    marginLeft: "-10%",
    marginTop: "2%",
  },
};

const App = () => {
  const classes = useStyles();
  return (
    <div className="main">
      <Menu />
      <Grid />
      <div style={styles.timeline}>
        <div style={styles.timelines}>
          <Timelines />
        </div>
        <div className={classes.root}>
          <StyledPaper elevation={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ChipCloud />
            </div>
            <div style={{ width: 100, marginLeft: 20, marginTop: 30 }}>
              <Progress
                percent={100}
                size="small"
                strokeColor={Colors.screens}
              />{" "}
              Russian
              <Progress
                percent={90}
                size="small"
                strokeColor={Colors.button}
              />{" "}
              Finnish
              <Progress
                percent={70}
                size="small"
                strokeColor={Colors.blog}
              />{" "}
              English
            </div>
          </StyledPaper>
        </div>
      </div>
      <Screens />
      <Footer />
    </div>
  );
};

export default App;
