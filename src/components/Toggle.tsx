import React, { useState, FunctionComponent } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core";
import Colors from "../constants/colors";
import clip5 from "../images/dc2.webp";
import clip3 from "../images/clip-3.webp";
import { Link } from "react-router-dom";

const StyledSwitch = withStyles({
  switchBase: {
    color: Colors.blog,
    "&$checked": {
      color: Colors.screens,
    },
    "&$checked + $track": {
      backgroundColor: Colors.gray,
    },
  },
  checked: {},
  track: {},
})(Switch);

const SwitchLabels: FunctionComponent = () => {
  const [logo, setLogo] = useState(clip5);
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked === true ? setLogo(clip3) : setLogo(clip5);
  };

  const [bubble, setBubble] = useState("none");
  const handleBubbleIn = () => setBubble("inline");
  const handleBubbleOut = () => setBubble("none");

  return (
    <div className="togglePic">
      <FormGroup row>
        <FormControlLabel
          control={
            <StyledSwitch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label=""
        />
      </FormGroup>
      <Link to="/">
        <div className="logocat">
          <img
            onMouseEnter={handleBubbleIn}
            onMouseLeave={handleBubbleOut}
            src={logo}
            alt="Logo"
            width="350px"
            className="headerClip"
          />
        </div>
      </Link>
      <p style={{ display: bubble }} className="bubble">
        Hi there!
      </p>
    </div>
  );
};

export default SwitchLabels;
