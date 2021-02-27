import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import Colors from "../constants/colors";
import react from "../images/react.webp";

const Projects: FunctionComponent<{
  ButtonColor: string;
  BlogButtonColor: string;
  AfterHoverBlog: string;
  AfterHoverButtons: string;
  OnHoverColor: string;
}> = (props) => {
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
        <h1>2020 | 2021</h1>
      </div>
      <div className="grid">
        <div className="grid-wrapper projects reactprojects">
          <GridItem
            text={"Todo App | React '20"}
            link={"https://old.create-react-app.com/todo/"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={react}
            alt="react"
          />
          <GridItem
            text={"Phonebook | React & Heroku"}
            link={"https://safe-reef-57298.herokuapp.com/"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={react}
            alt="react"
          />
          <GridItem
            text={"Todo App | React & Netlify '21"}
            link={"https://romantic-murdock-3acc77.netlify.app/"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={react}
            alt="react"
          />
        </div>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
    </div>
  );
};

export default Projects;