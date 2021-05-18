import { FunctionComponent, lazy, Suspense } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";
import Colors from "../constants/colors";
import styled from "@emotion/styled";
import BeatLoader from "react-spinners/BeatLoader";
import Arrow from "../components/Arrow";
import github from "../images/github.webp";
import books from "../images/books.webp";
import logo from "../images/logo/103.webp";

const BookPics = lazy(() => import("../components/BookPics"));

const H1 = styled.h1`
  color: ${Colors.gray};
  margin: -1% 0% 0.5% 0%;
  padding: 1% 2%;
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
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        setMainStyle=""
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <H1 className="houdini">Books</H1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
        <GridItem
          text={"Book List"}
          link={"./bookList"}
          color={Colors.almostBlack}
          onHoverTextColor={Colors.white}
          onHoverColor={props.OnHoverColor}
          boxStyle={styles.blog}
          afterHover={props.AfterHoverBlog}
          afterHoverTextColor={Colors.almostBlack}
          image={logo}
          alt="Book list"
        />
        <GridItem
          text={"Books Stats"}
          link={"./stats"}
          color={Colors.almostBlack}
          onHoverTextColor={Colors.white}
          onHoverColor={props.OnHoverColor}
          boxStyle={styles.blog}
          afterHover={props.AfterHoverBlog}
          afterHoverTextColor={Colors.almostBlack}
          image={books}
          alt="Book list"
        />
      </div>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 100,
            }}
          >
            <BeatLoader color={Colors.blog} size={30} loading={true} />
          </div>
        }
      >
        <BookPics />
      </Suspense>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default Books;
