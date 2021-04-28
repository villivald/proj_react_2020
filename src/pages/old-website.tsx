import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import Colors from "../constants/colors";
import html from "../images/html.webp";
import js from "../images/js.webp";
import react from "../images/react.webp";

const OldWebsites: FunctionComponent<{
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
      height: 120,
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
        <h1 className="react-page-title">Old Website Versions</h1>
      </div>
      <div className="grid">
        <div className="grid-wrapper projects oldwebsites">
          <GridItem
            text={"Website (Winter '19)"}
            link={
              "https://old.create-react-app.com/Projects/Skeleton/index.html"
            }
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={html}
            alt="html"
          />
          <GridItem
            text={"Website (Spring '20)"}
            link={"https://old.create-react-app.com/"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={js}
            alt="js"
          />
          <GridItem
            text={"Website (Winter '20)"}
            link={"https://old2021.villivald.com/"}
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

export default OldWebsites;
