import React, { useState, FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import about from "../images/about.webp";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const First: FunctionComponent = () => {
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
    <div className="main" id="up">
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        DropdownMenuStyle=""
        setMainStyle=""
      />
      <div className="contact-wrapper">
        <img
          style={{ marginBottom: "3%", width: "clamp(350px, 50%, 800px)" }}
          src={about}
          alt="About me poster"
          width="50%"
        />
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <a href="#up" style={{ display: butt }}>
        <div id="fixedbutton">
          <ArrowUpwardIcon fontSize="inherit" />
        </div>
      </a>
    </div>
  );
};

export default First;
