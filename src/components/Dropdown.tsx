import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mantine/core";
import { HamburgerMenuIcon } from "@modulz/radix-icons";
import dropdownData from "../data/dropdownData";
import "../css/dropDown.css";

const DropDown: FunctionComponent<{
  DropDownMenuColor: any;
  DropDownMenuStyle: any;
}> = (props) => {
  return (
    <Menu
      control={
        <Button
          className="dropdownMenuButton"
          variant={props.DropDownMenuStyle}
          color={props.DropDownMenuColor}
          size="xl"
          leftIcon={<HamburgerMenuIcon />}
        >
          Menu
        </Button>
      }
    >
      {dropdownData.map((item) => {
        return (
          <MenuItem
            icon={item.icon}
            key={item.address}
            className="dropDownMenuItem"
          >
            <Link to={item.address}>{item.text}</Link>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default DropDown;
