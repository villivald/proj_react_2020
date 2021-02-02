import { FunctionComponent } from "react";

const Contact: FunctionComponent<{
  picture: string;
  link: string;
  alt: string;
}> = (props) => {
  return (
    <a href={props.link}>
      <img
        className="icons"
        src={props.picture}
        alt={props.alt}
        height="30"
        width="30"
      />
    </a>
  );
};

export default Contact;
