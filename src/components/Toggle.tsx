/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FunctionComponent } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core";
import Colors from "../constants/colors";
import clip5 from "../images/dc2.webp";
import clip3 from "../images/clip-3.webp";
import { Link } from "react-router-dom";
import "../css/toggle.css";

const StyledSwitch = withStyles({
  switchBase: {
    color: Colors.toggle,
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

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="togglePic" tabIndex={0}>
      <FormGroup row>
        <FormControlLabel
          control={
            <StyledSwitch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
              inputProps={{ "aria-label": "Switch A" }}
            />
          }
          label="Small"
        />
      </FormGroup>
      <Link to="/">
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown ? (
            <div className="logocat">
              <img src={logo} alt="Logo" width="350px" className="headerClip" />
              <p className="bubble">Hi there!</p>
            </div>
          ) : (
            <div className="logocat">
              <img src={logo} alt="Logo" width="350px" className="headerClip" />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SwitchLabels;
