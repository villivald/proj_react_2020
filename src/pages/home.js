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
      <Menu
        menuStyle={mainStyle ? "menu-alt" : "menu"}
        DropdownMenuStyle={
          mainStyle ? "dropdown-basic-button-alt" : "dropdown-basic-button"
        }
        mainStyle={mainStyle}
        setMainStyle={setMainStyle}
      />
      <Grid />
      <Stats
        statsHeaders={mainStyle ? "h1-alt" : ""}
        TimelineColor={mainStyle ? "error" : "textSecondary"}
      />
      <Screens />
      <Footer footerStyle={mainStyle ? "footer-alt" : "footer"} />
    </div>
  );
};

export default Home;
