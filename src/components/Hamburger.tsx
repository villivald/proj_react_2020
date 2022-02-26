import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mantine/core";
import { HamburgerMenuIcon } from "@modulz/radix-icons";
import dropdownData from "../data/dropdownData";

const Hamburger: FunctionComponent<{
  DropDownMenuColor: string;
}> = (props) => {
  return (
    <Menu
      control={
        <Button
          variant="link"
          color={props.DropDownMenuColor}
          size="xl"
          leftIcon={<HamburgerMenuIcon />}
        />
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

export default Hamburger;
