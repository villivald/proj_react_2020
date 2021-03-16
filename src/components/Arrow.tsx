import { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "../css/arrow.css";

const Arrow = () => {
  const [butt, setButt] = useState("none");

  const handleScroll = () => {
    var rootElement = document.documentElement;
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.8) {
      setButt("inline");
    } else {
      setButt("none");
    }
  };
  document.addEventListener("scroll", handleScroll);
  return (
    <a href="#up" style={{ display: butt }}>
      <div id="fixedbutton">
        <ArrowUpwardIcon fontSize="inherit" />
      </div>
    </a>
  );
};

export default Arrow;
