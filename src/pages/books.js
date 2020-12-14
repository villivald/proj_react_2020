import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import Colors from "../constants/colors";
import Gallery from "react-grid-gallery";
import IMAGES from "../components/Images";

const Books = (props) => {
  const styles = {
    blog: {
      boxSizing: "border-box",
      color: Colors.whiteSmoke,
      fontSize: "1.2rem",
      fontFamily: "Mate, serif",
      width: 200,
      height: 100,
      border: "none",
      boxShadow: `5px 5px 9px 2px rgba(51,51,51,0.5)`,
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
  return (
    <div className="main">
      <Menu menuStyle="menu" ButtonDisplay="none" />
      <GridItem
        text={"Book List on GitHub"}
        link={"https://github.com/villivald/Books"}
        color={Colors.gray}
        hoverColor={Colors.buttonShadow}
        boxStyle={styles.blog}
        afterHover={props.AfterHoverBlog}
        image={"📚"}
        alt="wordpress"
      />
      <div className="galleryContainer">
        <div className="gallery">
          <Gallery images={IMAGES} enableImageSelection={false} />
        </div>
      </div>
      <Footer footerStyle="footer" />
    </div>
  );
};

export default Books;
