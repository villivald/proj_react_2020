import React, { useState, FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
  },
})(Button);

const StyledMenuItem = withStyles({
  root: {
    fontFamily: "Mate, serif",
  },
})(MenuItem);

const Drop: FunctionComponent<{ link: string }> = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    window.location.href = props.link;
  };

  return (
    <div>
      <StyledButton
        size="large"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<MenuIcon />}
      >
        Menu
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>My account</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
      </Menu>
    </div>
  );
};

export default Drop;
