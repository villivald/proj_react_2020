import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import GridItem from "../components/GridItem";
import Colors from "../constants/colors";
import js from "../images/js.webp";
import html from "../images/html.webp";

const Projects: FunctionComponent<{
  ButtonColor: string;
  BlogButtonColor: string;
  AfterHoverBlog: string;
  AfterHoverButtons: string;
  OnHoverColor: string;
}> = () => {
  const styles = {
    box: {
      boxSizing: "border-box",
      color: Colors.white,
      fontSize: "1.2rem",
      fontFamily: "Mate, serif",
      width: 200,
      height: 100,
      border: "none",
      boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
      borderRadius: 5,
      transform: "",
      backgroundColor: Colors.button,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };
  return (
    <div className="main">
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        DropdownMenuStyle=""
        setMainStyle=""
      />
      <div>
        <h1>2020</h1>
      </div>
      <div className="grid">
        <div className="grid-wrapper projects">
          <GridItem
            text={"Calculator | 🖥"}
            link={
              "https://old.create-react-app.com/Projects/calculator/index.html"
            }
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={Colors.buttonBackground}
            boxStyle={styles.box}
            afterHover={Colors.button}
            afterHoverTextColor={Colors.white}
            image={js}
            alt="js"
          />
          <GridItem
            text={"Calculator | 📱"}
            link={
              "https://old.create-react-app.com/Projects/calculator_mobile/test.html"
            }
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={Colors.buttonBackground}
            boxStyle={styles.box}
            afterHover={Colors.button}
            afterHoverTextColor={Colors.white}
            image={js}
            alt="js"
          />
          <GridItem
            text={"Ping-Pong | Player vs Player"}
            link={
              "https://old.create-react-app.com/Projects/ping_pong/index.html"
            }
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={Colors.buttonBackground}
            boxStyle={styles.box}
            afterHover={Colors.button}
            afterHoverTextColor={Colors.white}
            image={js}
            alt="js"
          />
          <GridItem
            text={"Ping-Pong | Player vs AI"}
            link={
              "https://old.create-react-app.com/Projects/ping_pong_v2/index.html"
            }
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={Colors.buttonBackground}
            boxStyle={styles.box}
            afterHover={Colors.button}
            afterHoverTextColor={Colors.white}
            image={js}
            alt="js"
          />
          <GridItem
            text={"Todo App | JS"}
            link={"https://old.create-react-app.com/Projects/ToDo/todo.html"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={Colors.buttonBackground}
            boxStyle={styles.box}
            afterHover={Colors.button}
            afterHoverTextColor={Colors.white}
            image={js}
            alt="js"
          />
          <GridItem
            text={"Layout"}
            link={"https://old.create-react-app.com/Projects/Site/index.html"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={Colors.buttonBackground}
            boxStyle={styles.box}
            afterHover={Colors.button}
            afterHoverTextColor={Colors.white}
            image={html}
            alt="html"
          />
        </div>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default Projects;
