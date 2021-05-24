import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Button, Hr } from "@mantine/core";
import {
  HamburgerMenuIcon,
  HomeIcon,
  BookmarkIcon,
  EnvelopeOpenIcon,
  LightningBoltIcon,
  IdCardIcon,
  DashboardIcon,
  BackpackIcon,
} from "@modulz/radix-icons";

const DropDown: FunctionComponent<{
  DropDownMenuColor: any;
  DropDownMenuStyle: any;
}> = (props) => {
  return (
    <Menu
      control={
        <Button
          variant={props.DropDownMenuStyle}
          color={props.DropDownMenuColor}
          size="xl"
          leftIcon={<HamburgerMenuIcon />}
        >
          Menu
        </Button>
      }
    >
      <MenuItem icon={<HomeIcon />}>
        <Link to="/">Home Page</Link>
      </MenuItem>
      <Hr />
      <MenuItem icon={<IdCardIcon />}>
        <Link to="/about">About</Link>
      </MenuItem>
      <Hr />
      <MenuItem icon={<EnvelopeOpenIcon />}>
        <Link to="/contact">Contact</Link>
      </MenuItem>
      <Hr />
      <MenuItem icon={<LightningBoltIcon />}>
        <Link to="/allProjects">Projects</Link>
      </MenuItem>
      <Hr />
      <MenuItem icon={<DashboardIcon />}>
        <Link to="/uses">Uses</Link>
      </MenuItem>
      <Hr />
      <MenuItem icon={<BackpackIcon />}>
        <Link to="/courses">Courses</Link>
      </MenuItem>
      <Hr />
      <MenuItem icon={<BookmarkIcon />}>
        <Link to="/books">Books</Link>
      </MenuItem>
    </Menu>
  );
};

export default DropDown;
