import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import Colors from "../constants/colors";
import Gallery from "react-grid-gallery";
import IMAGES from "../components/Images";
import github from "../images/github.webp";
import styled from "@emotion/styled";

const H1 = styled.h1`
  color: ${Colors.gray};
  margin: -1% 0% 0.5% 0%;
  padding: 1% 2%;
  /* &:hover {
    transform: rotate(3deg);
    border: 2px solid var(--accent);
  } */
`;

const Books: FunctionComponent<{
  AfterHoverBlog: string;
  OnHoverColor: string;
}> = (props) => {
  const styles = {
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
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        DropdownMenuStyle=""
        setMainStyle=""
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <H1 className="houdini">Books</H1>
      </div>
      <GridItem
        text={"Book List on GitHub"}
        link={"https://github.com/villivald/Books"}
        color={Colors.almostBlack}
        onHoverTextColor={Colors.white}
        onHoverColor={props.OnHoverColor}
        boxStyle={styles.blog}
        afterHover={props.AfterHoverBlog}
        afterHoverTextColor={Colors.almostBlack}
        image={github}
        alt="Book list"
      />
      <div className="galleryContainer">
        <div className="gallery">
          <Gallery images={IMAGES} enableImageSelection={false} />
        </div>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
    </div>
  );
};

export default Books;
