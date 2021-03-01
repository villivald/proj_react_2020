import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import fcc from "../images/fccdark.png";
import fm from "../images/fm.jpg";
import wb from "../images/wb.webp";
import coursera from "../images/coursera.jpeg";
import udemy from "../images/udemy.webp";
import savonia from "../images/savonia.webp";
import Course from "../components/Course";
import styled from "@emotion/styled";
import Colors from "../constants/colors";
import Arrow from "../components/Arrow";
import "../css/courses.css";

const H1 = styled.h1`
  color: ${Colors.gray};
  padding: 10px 20px 10px 20px;
`;

const Second: FunctionComponent = () => {
  return (
    <div className="main">
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic=""
        DropdownMenuStyle=""
        setMainStyle=""
      />
      <div className="courses">
        <ul>
          <H1 className="contacts houdini">Courses & Certifications</H1>
          <h2 className="h2-courses">Completed</h2>
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/linux-command-line/"}
            name={"Complete Intro to Linux and the Command-Line - "}
            date={"06.09.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/getting-a-job/"}
            name={"Getting a Front-End Developer Job - "}
            date={"15.09.20"}
          />
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={
              "https://freecodecamp.org/certification/villivald/responsive-web-design"
            }
            name={"Responsive Web Design - "}
            date={"25.10.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/css-in-depth-v2/"}
            name={"CSS In-Depth - "}
            date={"02.11.20"}
          />
          <Course
            pic={coursera}
            alt={"coursera logo"}
            height={45}
            width={45}
            link={
              "https://www.coursera.org/account/accomplishments/certificate/XXH88UHKWCNW"
            }
            name={
              "Michigan University - Internet History, Technology, and Security - "
            }
            date={"09.11.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/design-systems/"}
            name={"Design Systems with React & Storybook - "}
            date={"16.11.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/customize-vs-code/"}
            name={"Visual Studio Code Can Do That? - "}
            date={"23.11.20"}
          />
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={
              "https://freecodecamp.org/certification/villivald/javascript-algorithms-and-data-structures"
            }
            name={"JavaScript Algorithms and Data Structures - "}
            date={"02.12.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/fullstack-v2/"}
            name={"Full Stack for Front-End Engineers - "}
            date={"14.12.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/intermediate-react-v2/"}
            name={"Intermediate React - "}
            date={"23.12.20"}
          />
          <Course
            pic={wb}
            alt={"wes bos logo"}
            height={45}
            width={45}
            link={"http://masteringmarkdown.com/"}
            name={"Mastering Markdown - "}
            date={"24.12.20"}
          />
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={
              "https://www.freecodecamp.org/certification/villivald/front-end-libraries"
            }
            name={"Front End Libraries - "}
            date={"31.01.21"}
          />
          <h2 className="h2-courses">Ongoing</h2>
          <Course
            pic={udemy}
            alt={"udemy logo"}
            height={40}
            width={48}
            link={"https://www.udemy.com/course/understanding-typescript/"}
            name={"Understanding TypeScript"}
          />
          <Course
            pic={savonia}
            alt={"savonia university logo"}
            height={45}
            width={45}
            link={
              "https://www.lyyti.fi/p/CampusOnline21_Websovelluskehitys_ja_NoSQLkannat_7210"
            }
            name={"Web Application Development and NoSQL"}
          />
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={"https://www.freecodecamp.org/learn/data-visualization/"}
            name={"Data Visualization"}
          />
        </ul>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default Second;
