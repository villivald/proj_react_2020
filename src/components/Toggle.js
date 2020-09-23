import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core";
import Colors from "../constants/colors";

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

const SwitchLabels = (props) => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
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
  );
};

export default SwitchLabels;
