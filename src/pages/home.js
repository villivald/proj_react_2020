import React, { useState } from "react";
import Grid from "../components/Grid";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Screens from "../components/Screens";
import Stats from "../components/Stats";
import night from "../images/night.webp";
import lamp from "../images/lamp.png";
import Colors from "../constants/colors";

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
        Pic={mainStyle ? lamp : night}
      />
      <Grid
        BlogButtonColor={mainStyle ? "rgb(139, 133, 133)" : Colors.blog}
        ButtonColor={mainStyle ? "rgb(139, 133, 133)" : Colors.button}
        AfterHoverBlog={mainStyle ? "rgb(139, 133, 133)" : Colors.blog}
        AfterHoverButtons={mainStyle ? "rgb(139, 133, 133)" : Colors.button}
      />
      <Stats
        statsHeaders={mainStyle ? "h1-alt" : ""}
        TimelineColor={mainStyle ? "error" : "textPrimary"}
        ContainerColor={mainStyle ? "rgb(139, 133, 133)" : ""}
        ChipColors={mainStyle ? "#333" : Colors.header}
      />
      <Screens statsHeaders={mainStyle ? "h1-alt" : ""} />
      <Footer footerStyle={mainStyle ? "footer-alt" : "footer"} />
    </div>
  );
};

export default Home;
