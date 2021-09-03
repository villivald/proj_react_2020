import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import BackButton from "../components/BackButton";
import about from "../images/about.webp";
import "../css/about.css";

const First: FunctionComponent = () => {
  return (
    <div className="main">
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        setMainStyle=""
      />
      <BackButton />
      <div className="contact-wrapper">
        <img
          className="aboutPoster"
          src={about}
          alt="About me poster"
          width="425px"
          height="600px"
        />
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default First;
