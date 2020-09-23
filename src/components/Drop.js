import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core";

/*const styles = {
  drop: {
    display: "flex",
    boxSizing: "border-box",
    marginLeft: "80%",
    position: "absolute",
    border: `2px solid ${Colors.gray}`,
    borderRadius: 5,
    color: Colors.gray,
    fontFamily: "Mate, serif",
    fontSize: 18,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "",
  },
};*/

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

const Drop = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /*const changeMenuColor = (e) => {
    e.target.style.color = Colors.whiteSmoke;
    e.target.style.border = `2px solid ${Colors.whiteSmoke}`;
    e.target.style.boxShadow = `0px 0px 9px 2px rgba(51,51,51,0.41)`;
  };
  const changeMenuColorBack = (e) => {
    e.target.style.color = Colors.gray;
    e.target.style.border = `2px solid ${Colors.gray}`;
    e.target.style.boxShadow = "";
  };*/
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
