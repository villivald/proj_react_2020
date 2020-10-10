import React from "react";
import GridItem from "./GridItem";
import Colors from "../constants/colors";
import html from "../images/html.webp";
import js from "../images/js.webp";
import react from "../images/react.webp";
import wpb from "../images/wpb.webp";
import soon from "../images/soon.webp";

const styles = {
  box: {
    boxSizing: "border-box",
    color: Colors.whiteSmoke,
    fontSize: "1.2rem",
    fontFamily: "Mate, serif",
    width: 200,
    height: 100,
    border: "none",
    boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
    outline: "none",
    borderRadius: 5,
    transform: "",
    backgroundColor: Colors.button,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  blog: {
    boxSizing: "border-box",
    color: Colors.whiteSmoke,
    fontSize: "1.2rem",
    fontFamily: "Mate, serif",
    width: 200,
    height: 100,
    border: "none",
    boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
    outline: "none",
    borderRadius: 5,
    transform: "",
    backgroundColor: Colors.blog,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
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
            "https://old.create-react-app.com/Projects/calculator/index.html"
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
            "https://old.create-react-app.com/Projects/calculator_mobile/test.html"
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
            "https://old.create-react-app.com/Projects/ping_pong/index.html"
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
            "https://old.create-react-app.com/Projects/ping_pong_v2/index.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Todo App | JS"}
          link={"https://old.create-react-app.com/Projects/ToDo/todo.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Layout"}
          link={"https://old.create-react-app.com/Projects/Site/index.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={html}
        />
        <GridItem
          text={"Mine Sweeper | JS"}
          link={
            "https://old.create-react-app.com/Projects/MineSweeper/index.html"
          }
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={js}
        />
        <GridItem
          text={"Todo App | React"}
          link={"https://old.create-react-app.com/todo/"}
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
          link={"https://old.create-react-app.com/Projects/Skeleton/index.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={html}
        />
        <GridItem
          text={"Website (Spring '20)"}
          link={"https://old.create-react-app.com/"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={html}
        />
        <GridItem
          text={"Currently working on: React Native App"}
          link={"https://create-react-app.com/7-react-native/"}
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
