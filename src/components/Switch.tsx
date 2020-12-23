import React, { useState, FunctionComponent } from "react";
import Colors from "../constants/colors";

const styles = {
  drop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 100,
    height: 50,
    backgroundColor: Colors.button,
    color: Colors.whiteSmoke,
    outline: "none",
    fontFamily: "Mate, serif",
    fontSize: 16,
  },
  dropAlt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 100,
    height: 50,
    backgroundColor: Colors.blog,
    color: Colors.whiteSmoke,
    outline: "none",
    fontFamily: "Mate, serif",
    fontSize: 16,
  },
};

const Zwitch: FunctionComponent = (props) => {
  const [style, setStyle] = useState(styles.drop);
  const handleClick = () => {
    style === styles.drop ? setStyle(styles.dropAlt) : setStyle(styles.drop);
  };
  return (
    <button style={style} onClick={handleClick}>
      Switch
    </button>
  );
};

export default Zwitch;
