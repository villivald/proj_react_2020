import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Line from "../components/Line";
import Line2020 from "../components/Line2020";
import BackButton from "../components/BackButton";

const Stats: FunctionComponent = () => {
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
      <div>
        <h1 className="react-page-title">Books Stats</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Line />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Line2020 />
      </div>

      <Footer footerStyle="footer" footerTextStyle="a" />
    </div>
  );
};

export default Stats;
