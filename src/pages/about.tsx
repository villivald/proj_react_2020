import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import about from "../images/about.webp";

const First: FunctionComponent = () => {
  return (
    <div className="main">
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
    </div>
  );
};

export default First;
