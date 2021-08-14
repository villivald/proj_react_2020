import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import BackButton from "../components/BackButton";
import Colors from "../constants/colors";
import react from "../images/react.webp";
import soon from "../images/soon.webp";
import html from "../images/html.webp";
import vite from "../images/vite.svg";
import nextjs from "../images/nextjs.svg";
import php from "../images/php.webp";
import markdown from "../images/markdown.webp";
import ts from "../images/ts.webp";

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
        setMainStyle=""
      />
      <BackButton />
      <div>
        <h1 className="react-page-title">Projects</h1>
      </div>
      <div className="grid">
        <div className="grid-wrapper projects reactprojects allProjects">
          <GridItem
            text={"React Projects ('20, '21)"}
            link={"./react"}
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
            text={"Old JS Projects"}
            link={"./projects"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={soon}
            alt="old projects"
          />
          <GridItem
            text={"Old Website Versions"}
            link={"/old-website"}
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
            text={"Store Catalog | PHP"}
            link={"https://old.villivald.com/Projects/PHP"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={php}
            alt="php"
          />
          <GridItem
            text={"Markdown Cheatsheet"}
            link={"https://old.villivald.com/Projects/Cheatsheet.md"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={markdown}
            alt="markdown"
          />
          <GridItem
            text={"Drag & Drop Todo App | TS"}
            link={"https://old.villivald.com/Projects/DragAndDrop"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={ts}
            alt="ts"
          />
          <GridItem
            text={"Vaccines Stats App | React"}
            link={"https://vaccine2021.vercel.app"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={vite}
            alt="vite"
          />
          <GridItem
            text={"Koripallopaikat | Next.js"}
            link={"https://koripallopaikat.com"}
            color={Colors.gray}
            onHoverTextColor={Colors.almostBlack}
            onHoverColor={props.OnHoverColor}
            boxStyle={styles.box}
            afterHover={props.AfterHoverButtons}
            afterHoverTextColor={Colors.white}
            image={nextjs}
            alt="next js"
          />
        </div>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
    </div>
  );
};

export default Projects;
