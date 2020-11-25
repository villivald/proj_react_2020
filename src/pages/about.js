import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import about from "../images/about.svg";

const First = (props) => {
  return (
    <div className="main">
      <Menu menuStyle="menu" ButtonDisplay="none" />
      <div className="contact-wrapper">
        <img
          style={{ marginBottom: "50px" }}
          src={about}
          alt="About me poster"
          width="50%"
        />
      </div>
      <Footer footerStyle="footer" />
    </div>
  );
};

export default First;
