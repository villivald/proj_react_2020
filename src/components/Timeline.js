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
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/University_of_Helsinki.svg/1280px-University_of_Helsinki.svg.png"
            }
          />
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
          <Avatar src={"https://prohelsinki.fi/sites/default/files/logo.jpg"} />
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
          <Avatar
            src={"https://www.acs.ac.in/wp-content/uploads/2019/04/ma.jpg"}
          />
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
          <Avatar
            src={
              "https://pbs.twimg.com/profile_images/829972090396823552/EJQJ4hRW.jpg"
            }
          />
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
          <Avatar
            src={
              "data:image/png;base64,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"
            }
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timelines;
