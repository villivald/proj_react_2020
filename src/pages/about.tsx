import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import BackButton from "../components/BackButton";
import about from "../images/about.webp";

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
          style={{ marginBottom: "3%", width: "clamp(350px, 50%, 800px)" }}
          src={about}
          alt="About me poster"
          width="50%"
        />
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default First;
