import React from "react";
import GridItem from "./GridItem";
import Colors from "../constants/colors";
import html from "../images/html.png";
import js from "../images/js.svg";
import react from "../images/react.svg";
import wpb from "../images/wpb.svg";
import soon from "../images/soon.png";

const styles = {
  box: {
    boxSizing: "border-box",
    color: Colors.whiteSmoke,
    fontSize: 20,
    fontFamily: "Mate, serif",
    width: 200,
    height: 100,
    border: "none",
    //boxShadow: `4px 4px ${Colors.gray}`,
    boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
    outline: "none",
    borderRadius: 5,
    transform: "",
    backgroundColor: Colors.button,
    cursor: "pointer",
  },
  blog: {
    boxSizing: "border-box",
    color: Colors.whiteSmoke,
    fontSize: 20,
    fontFamily: "Mate, serif",
    width: 200,
    height: 100,
    border: "none",
    //boxShadow: `4px 4px ${Colors.gray}`,
    boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
    outline: "none",
    borderRadius: 5,
    transform: "",
    backgroundColor: Colors.blog,
    cursor: "pointer",
  },
};

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid-wrapper">
        <GridItem
          text={"Blog"}
          link={"https://create-react-app.com/"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.blog}
          afterHover={Colors.blog}
          image={wpb}
        />
        <GridItem
          text={"Calculator | 🖥"}
          link={
            "https://proj.create-react-app.com/Projects/calculator/index.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          background={Colors.button}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Calculator | 📱"}
          link={
            "https://proj.create-react-app.com/Projects/calculator_mobile/test.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Ping-Pong | Player vs Player"}
          link={
            "https://proj.create-react-app.com/Projects/ping_pong/index.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Ping-Pong | Player vs AI"}
          link={
            "https://proj.create-react-app.com/Projects/ping_pong_v2/index.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Todo App | JS"}
          link={"https://proj.create-react-app.com/Projects/ToDo/todo.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Layout"}
          link={"https://proj.create-react-app.com/Projects/Site/index.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={html}
        />
        <GridItem
          text={"Mine Sweeper | JS"}
          link={
            "https://proj.create-react-app.com/Projects/MineSweeper/index.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Todo App | React"}
          link={"https://proj.create-react-app.com/todo/"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={react}
        />
        <GridItem
          text={"Phonebook | React & Heroku"}
          link={"https://safe-reef-57298.herokuapp.com/"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={react}
        />
        <GridItem
          text={"Website (Winter '19)"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={html}
        />
        <GridItem
          text={"Website (Spring '20)"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={html}
        />
        <GridItem
          text={"Currently working on: React Native App"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={react}
        />
        <GridItem
          text={"More coming soon... "}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={soon}
        />
      </div>
    </div>
  );
};

export default Grid;
