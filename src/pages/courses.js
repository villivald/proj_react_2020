import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import fcc from "../images/fccdark.png";
import fm from "../images/fm.jpg";
import coursera from "../images/coursera.jpeg";
import Course from "../components/Course";
// import Star from "../components/Star";
import styled from "@emotion/styled";
import Colors from "../constants/colors";

const Hui = styled.h1`
  color: ${Colors.gray};
  &:hover {
    transform: rotate(3deg);
    border: 2px solid var(--accent);
  }
`;

const Second = () => {
  return (
    <div className="main">
      <Menu menuStyle="menu" ButtonDisplay="none" />
      <div className="courses">
        <ul>
          <Hui className="contacts">Courses & Certifications</Hui>
          <h2 className="h2-courses">Completed</h2>
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/linux-command-line/"}
            name={"Complete Intro to Linux and the Command-Line - 06.09.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/getting-a-job/"}
            name={"Getting a Front-End Developer Job - 15.09.20"}
          />
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={
              "https://freecodecamp.org/certification/villivald/responsive-web-design"
            }
            name={"Responsive Web Design - 25.10.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/css-in-depth-v2/"}
            name={"CSS In-Depth - 02.11.20"}
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
              "Michigan University - Internet History, Technology, and Security - 09.11.20"
            }
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/design-systems/"}
            name={"Design Systems with React & Storybook - 16.11.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/customize-vs-code/"}
            name={"Visual Studio Code Can Do That? - 23.11.20"}
          />
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={
              "https://freecodecamp.org/certification/villivald/javascript-algorithms-and-data-structures"
            }
            name={"JavaScript Algorithms and Data Structures - 02.12.20"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/fullstack-v2/"}
            name={"Full Stack for Front-End Engineers - 14.12.20"}
          />
          <h2 className="h2-courses">Ongoing</h2>
          <Course
            pic={fcc}
            alt={"freecodecamp logo"}
            height={35.5}
            width={50}
            link={"https://www.freecodecamp.org/learn/"}
            name={"Front End Libraries"}
          />
          <Course
            pic={fm}
            alt={"frontend masters logo"}
            height={45}
            width={45}
            link={"https://frontendmasters.com/courses/intermediate-react-v2/"}
            name={"Intermediate React"}
          />
        </ul>
      </div>
      <Footer footerStyle="footer" />
    </div>
  );
};

export default Second;
