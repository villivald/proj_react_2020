/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";

const List: FunctionComponent<{
  emoji: string;
  link: string;
  name: any;
  newLink?: string;
  newName?: string;
}> = (props) => {
  return (
    <li className="use">
      <span className="emoji" role="img" aria-label="bike">
        {props.emoji}
      </span>
      <a href={props.link}>{props.name}</a>
      <a href={props.newLink}>{props.newName}</a>
    </li>
  );
};

export default List;
