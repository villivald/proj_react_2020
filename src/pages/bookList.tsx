import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { fetchedBooks } from "../components/Hook";
import Colors from "../constants/colors";
import styled from "@emotion/styled";
import Arrow from "../components/Arrow";
import BackButton from "../components/BackButton";

const H1 = styled.h1`
  color: ${Colors.gray};
  margin: -1% 0% 0.5% 0%;
  padding: 1% 2%;
`;

const Books: FunctionComponent<{
  AfterHoverBlog: string;
  OnHoverColor: string;
}> = () => {
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

      <H1 className="houdini">Books</H1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          placeItems: "center",
          gap: "5px",
          margin: "0 30px 30px 30px",
        }}
      >
        {fetchedBooks()}
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default Books;
