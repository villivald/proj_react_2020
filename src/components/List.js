import React from "react";

const List = (props) => {
  return (
    <li className="use">
      <span className="emoji" role="img" aria-label="bike">
        {props.emoji}
      </span>
      <a href={props.link}>{props.name}</a>
    </li>
  );
};

export default List;
