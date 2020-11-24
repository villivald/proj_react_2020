import React, { useState } from "react";
import Grid from "../components/Grid";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Screens from "../components/Screens";
import Stats from "../components/Stats";

const Home = () => {
  const [mainStyle, setMainStyle] = useState(false);
  return (
    <div className={mainStyle ? "main-alt" : "main"}>
      <Menu menuStyle={mainStyle ? "menu-alt" : "menu"} />
      <Grid />
      <Stats statsHeaders={mainStyle ? "h1-alt" : ""} />
      <Screens />
      <Footer footerStyle={mainStyle ? "footer-alt" : "menu"} />
      <button
        className="theme-btn"
        onClick={() => {
          setMainStyle(!mainStyle);
        }}
      >
        <span role="img" aria-label="emoji">
          🌗
        </span>
      </button>
    </div>
  );
};

export default Home;
