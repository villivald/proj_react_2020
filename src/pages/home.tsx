import React, { useState, FunctionComponent } from "react";
import Grid from "../components/Grid";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Screens from "../components/Screens";
import Stats from "../components/Stats";
import night from "../images/night.webp";
import lamp from "../images/lamp.png";
import Colors from "../constants/colors";

const Home: FunctionComponent = () => {
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
        ButtonDisplay={true}
      />
      <Grid
        BlogButtonColor={mainStyle ? "#DDDFE3" : Colors.blog}
        ButtonColor={mainStyle ? "#6C7073" : Colors.button}
        AfterHoverBlog={mainStyle ? "#DDDFE3" : Colors.blog}
        AfterHoverButtons={mainStyle ? "#6C7073" : Colors.button}
        OnHoverColor={mainStyle ? "#DDDFE3" : Colors.buttonBackground}
      />
      <Stats
        statsHeaders={mainStyle ? "underline-alt" : "underline"}
        TimelineColor={mainStyle ? "error" : "textPrimary"}
        ContainerColor={mainStyle ? "#6C7073" : ""}
        ChipColors={mainStyle ? "#DDDFE3" : Colors.header}
      />
      <Screens statsHeaders={mainStyle ? "h1-alt" : ""} />
      <Footer footerStyle={mainStyle ? "footer-alt" : "footer"} />
    </div>
  );
};

export default Home;
