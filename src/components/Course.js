import React from "react";

const Course = (props) => {
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
