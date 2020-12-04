import React from "react";
import { Progress } from "antd";
import ChipCloud from "../components/ChipCloud";
import clip2 from "../images/clip-2.webp";
import Timelines from "../components/Timeline";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "antd/dist/antd.css";

const Stats = (props) => {
  const StyledPaper = withStyles({
    root: {
      fontFamily: "Mate SC, serif",
      backgroundColor: props.ContainerColor,
      borderRadius: 5,
      paddingBottom: 50,
    },
  })(Paper);
  return (
    <div>
      <div className="headers">
        <h1 className={props.statsHeaders}>Timeline</h1>
        <h1 className={props.statsHeaders}>Skills</h1>
      </div>
      <div className="timeline">
        <div className="timelines">
          <Timelines TextColor={props.TimelineColor} />
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
                <ChipCloud ChipColor={props.ChipColors} />
              </div>
              <div className="stats">
                <div
                  style={{
                    width: 200,
                    marginLeft: 20,
                    marginTop: 30,
                  }}
                >
                  <Progress percent={40} size="small" /> B.E. 2019 - 2023
                  (95/240 ECTS)
                  <Progress percent={100} size="small" /> M.A. 2011 - 2015 (300
                  ECTS)
                </div>
                <img src={clip2} alt="Logo" width="250px" />
              </div>
              <Button variant="contained" href="/courses">
                Courses & Certifications
              </Button>
            </StyledPaper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
