import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import fcc from "../images/fccdark.png";
import fm from "../images/fm.jpg";
import coursera from "../images/coursera.jpeg";

const Second = () => {
  return (
    <div className="main">
      <Menu menuStyle="menu" ButtonDisplay="none" />
      <div className="courses">
        <ul>
          <h1 className="contacts">Courses & Certifications</h1>
          <h2 className="h2-courses">Completed</h2>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            <a href="https://frontendmasters.com/courses/linux-command-line/">
              Complete Intro to Linux and the Command-Line - 06.09.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            <a href="https://frontendmasters.com/courses/getting-a-job/">
              Getting a Front-End Developer Job - 15.09.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fcc}
              alt="freecodecamp logo"
              height="35,5"
              width="50"
            />
            <a href="https://freecodecamp.org/certification/villivald/responsive-web-design">
              Responsive Web Design - 25.10.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            <a href="https://frontendmasters.com/courses/css-in-depth-v2/">
              CSS In-Depth - 02.11.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={coursera}
              alt="coursera logo"
              height="45"
              width="45"
            />
            <a href="https://www.coursera.org/account/accomplishments/certificate/XXH88UHKWCNW">
              Michigan University - Internet History - 09.11.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            <a href="https://frontendmasters.com/courses/design-systems/">
              Design Systems with React & Storybook - 16.11.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            <a href="https://frontendmasters.com/courses/customize-vs-code/">
              Visual Studio Code Can Do That? - 23.11.20
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fcc}
              alt="freecodecamp logo"
              height="35,5"
              width="50"
            />
            <a href="https://freecodecamp.org/certification/villivald/javascript-algorithms-and-data-structures">
              JavaScript Algorithms and Data Structures - 02.12.20
            </a>
          </li>
          <h2 className="h2-courses">Ongoing</h2>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            <a href="https://frontendmasters.com/courses/fullstack-v2/">
              Full Stack for Front-End Engineers
            </a>
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fcc}
              alt="freecodecamp logo"
              height="35,5"
              width="50"
            />
            <a href="https://www.freecodecamp.org/learn/">
              Front End Libraries
            </a>
          </li>
        </ul>
      </div>
      <Footer footerStyle="footer" />
    </div>
  );
};

export default Second;
