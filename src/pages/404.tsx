import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import NotFound from "../images/404.svg";
import Arrow from "../components/Arrow";

const PageNotFound: FunctionComponent = () => {
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
      <div className="contact-wrapper">
        <img
          style={{ width: "clamp(350px, 50%, 800px)" }}
          src={NotFound}
          alt="404"
          width="50%"
        />
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default PageNotFound;
