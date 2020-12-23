import { FunctionComponent } from "react";

const List: FunctionComponent<{
  emoji: string;
  link: string;
  name: string;
}> = (props) => {
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
