import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" variant="info" title="Menu">
      <Dropdown.Item href="http://google.com">Not</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="https://www.linkedin.com/in/maxim-villivald-4b1b311a3/">
        Yet
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Ready</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
