import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown: FunctionComponent<{ DropdownId: string }> = (props) => {
  return (
    <DropdownButton id={props.DropdownId} variant="info" title="Menu">
      <Dropdown.Item>
        <Link to="/">Home Page</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/about">About</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/contact">Contact</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/allProjects">Projects</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/uses">Uses</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/courses">Courses</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/books">Books</Link>
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
