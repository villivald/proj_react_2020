import { FunctionComponent } from "react";
import GridItem from "./GridItem";
import Colors from "../constants/colors";
import html from "../images/html.webp";
import js from "../images/js.webp";
import react from "../images/react.webp";
import wpb from "../images/wpb.webp";
import soon from "../images/soon.webp";
import php from "../images/php.webp";
import markdown from "../images/markdown.webp";
import ts from "../images/ts.webp";

const Grid: FunctionComponent<{
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
      backgroundColor: props.ButtonColor,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    blog: {
      boxSizing: "border-box",
      color: Colors.almostBlack,
      fontSize: "1.2rem",
      fontFamily: "Mate, serif",
      width: 200,
      height: 100,
      border: "none",
      boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
      borderRadius: 5,
      transform: "",
      backgroundColor: props.BlogButtonColor,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };
  return (
    <div className="grid">
      {/* {<div className="vertical-text">PROJECTS</div>} */}
      <div className="grid-wrapper">
        <GridItem
          text={"Blog"}
          link={"https://create-react-app.com/"}
          color={Colors.almostBlack}
          onHoverTextColor={Colors.white}
          onHoverColor={props.OnHoverColor}
          boxStyle={styles.blog}
          afterHover={props.AfterHoverBlog}
          afterHoverTextColor={Colors.almostBlack}
          image={wpb}
          alt="wordpress"
        />
        <GridItem
          text={"Old Projects ('19, '20)"}
          link={"/projects"}
          color={Colors.gray}
          onHoverTextColor={Colors.almostBlack}
          onHoverColor={props.OnHoverColor}
          boxStyle={styles.box}
          afterHover={props.AfterHoverButtons}
          afterHoverTextColor={Colors.white}
          image={soon}
          alt="coming soon"
        />
        <GridItem
          text={"Mine Sweeper | JS"}
          link={
            "https://old.create-react-app.com/Projects/MineSweeper/index.html"
          }
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
          link={"https://old.create-react-app.com/Projects/PHP/"}
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
          link={"https://old.create-react-app.com/Projects/Cheatsheet.md"}
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
          link={"https://old.create-react-app.com/Projects/DragAndDrop/"}
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
          text={"React Projects"}
          link={"/react"}
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
  );
};

export default Grid;
