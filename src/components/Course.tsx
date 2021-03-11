import { FunctionComponent } from "react";
import "../css/course.css";

const Course: FunctionComponent<{
  pic: string;
  alt: string;
  height: number;
  width: number;
  link: string;
  name: string;
  date?: string;
}> = (props) => {
  return (
    <li className="course course-li">
      <img
        className="icons course-icons"
        src={props.pic}
        alt={props.alt}
        height={props.height}
        width={props.width}
      />
      <a className="courseName" href={props.link}>
        {props.name}
        <p className="courseDate">{props.date}</p>
      </a>
    </li>
  );
};

export default Course;
