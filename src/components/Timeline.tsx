import { FunctionComponent } from "react";
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
import helsinki from "../images/helsinki.webp";
import prohelsinki from "../images/prohelsinki.webp";
import ma from "../images/ma.webp";
import hkl from "../images/hkl.webp";
import lab from "../images/lab.webp";

const StyledTypo = withStyles({
  root: {
    fontFamily: "Mate, serif",
  },
})(Typography);

const Timelines: FunctionComponent<{ TextColor: any }> = (props) => {
  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color={props.TextColor}>2011</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo color={props.TextColor}>
            University of Helsinki
          </StyledTypo>
          <Avatar src={helsinki} alt="university of helsinki" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color={props.TextColor}>2014</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo color={props.TextColor}>
            Trainee Copywriter @ AshberryDesign Oy
          </StyledTypo>
          <Avatar src={prohelsinki} alt="pro helsinki" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color={props.TextColor}>2015</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo color={props.TextColor}>
            Graduated as Master of Arts
          </StyledTypo>
          <Avatar src={ma} alt="master of arts" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color={props.TextColor}>2017</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo color={props.TextColor}>Tram driver @ HKL</StyledTypo>
          <Avatar src={hkl} alt="hkl/hst" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <StyledTypo color={props.TextColor}>2019</StyledTypo>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledTypo color={props.TextColor}>
            LAB University of Applied Sciences
          </StyledTypo>
          <Avatar src={lab} alt="lab university" />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timelines;
