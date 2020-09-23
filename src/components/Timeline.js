import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core";
import helsinki from "../images/helsinki.png";
import prohelsinki from "../images/prohelsinki.jpg";
import ma from "../images/ma.png";
import hkl from "../images/hkl.jpg";
import lab from "../images/lab.png";

const StyledTypo = withStyles({
  root: {
    fontFamily: "Mate, serif",
  },
})(Typography);

const Timelines = (props) => {
  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color="textSecondary">2011</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo>University of Helsinki</StyledTypo>
          <Avatar src={helsinki} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color="textSecondary">2014</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo>Trainee Copywriter @ AshberryDesign Oy</StyledTypo>
          <Avatar src={prohelsinki} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color="textSecondary">2015</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo>Graduated as Master of Arts</StyledTypo>
          <Avatar src={ma} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color="textSecondary">2017</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo>Tram driver @ HKL</StyledTypo>
          <Avatar src={hkl} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color="textSecondary">2019</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo>LAB University of Applied Sciences</StyledTypo>
          <Avatar src={lab} />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timelines;
