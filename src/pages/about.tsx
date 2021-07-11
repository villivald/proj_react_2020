import { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import about from "../images/about.webp";

const First: FunctionComponent = () => {
  const history = useHistory();

  const routeChange = () => {
    history.goBack();
  };

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

      <div className="backButton" onClick={routeChange}>
        Back
      </div>

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
