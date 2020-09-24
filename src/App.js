import React from "react";
import Grid from "./components/Grid";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Screens from "./components/Screens";
import Timelines from "./components/Timeline";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "antd/dist/antd.css";
import { Progress } from "antd";
import ChipCloud from "./components/ChipCloud";

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
    backgroundColor: "",
    borderRadius: 5,
    paddingBottom: 50,
  },
})(Paper);

const App = () => {
  return (
    <div className="main">
      <Menu />
      <Grid />
      <div className="headers">
        <h1>Timeline</h1>
        <h1>Skills</h1>
      </div>
      <div className="timeline">
        <div className="timelines">
          <Timelines />
        </div>
        <div className="chipWrapper">
          <div className="chipper">
            <StyledPaper elevation={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                }}
              >
                <ChipCloud />
              </div>
              <div style={{ width: 200, marginLeft: 20, marginTop: 30 }}>
                <Progress percent={37.5} size="small" /> B.E. 2019 - 2023
                (90/240 ECTS)
                <Progress percent={100} size="small" /> M.A. 2011 - 2015 (300
                ECTS)
              </div>
            </StyledPaper>
          </div>
        </div>
      </div>
      <Screens />
      <Footer />
    </div>
  );
};

export default App;
