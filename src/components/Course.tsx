import { FunctionComponent } from "react";

const Course: FunctionComponent<{
  pic: string;
  alt: string;
  height: number;
  width: number;
  link: string;
  name: string;
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
      <a href={props.link}>{props.name}</a>
    </li>
  );
};

export default Course;
