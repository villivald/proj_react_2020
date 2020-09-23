import React from "react";
import GridItem from "./GridItem";
import Colors from "../constants/colors";

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
          image={
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg"
          }
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
          image={
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          }
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
          image={
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          }
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
          image={
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          }
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
          image={
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          }
        />
        <GridItem
          text={"Todo App | JS"}
          link={"https://proj.create-react-app.com/Projects/ToDo/todo.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          }
        />
        <GridItem
          text={"Layout"}
          link={"https://proj.create-react-app.com/Projects/Site/index.html"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          }
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
          image={
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          }
        />
        <GridItem
          text={"Todo App | React"}
          link={"https://proj.create-react-app.com/todo/"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          }
        />
        <GridItem
          text={"Phonebook | React & Heroku"}
          link={"https://safe-reef-57298.herokuapp.com/"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          }
        />
        <GridItem
          text={"Website (Winter '19)"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          }
        />
        <GridItem
          text={"Website (Spring '20)"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          }
        />
        <GridItem
          text={"Currently working on: React Native App"}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          }
        />
        <GridItem
          text={"More coming soon... "}
          color={Colors.gray}
          hoverColor={Colors.buttonShadow}
          boxStyle={styles.box}
          afterHover={Colors.button}
          image={
            "https://cdn.dribbble.com/users/725831/screenshots/3251631/__________-2.png"
          }
        />
      </div>
    </div>
  );
};

export default Grid;
