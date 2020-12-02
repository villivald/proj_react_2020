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
      <h1 className="contacts">Courses & Certifications</h1>
      <div className="courses">
        <ul>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            Linux & CLI, Brian Holt - 06.09.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            Getting a Front-End Developer Job - 15.09.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fcc}
              alt="freecodecamp logo"
              height="35,5"
              width="50"
            />
            Responsive Web Design - 25.10.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            CSS In-Depth - 02.11.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={coursera}
              alt="coursera logo"
              height="45"
              width="45"
            />
            Michigan University - Internet History - 09.11.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            Design Systems with Storybook & React - 16.11.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fm}
              alt="frontend masters logo"
              height="45"
              width="45"
            />
            Visual Studio Code Can Do That? - 23.11.20
          </li>
          <li className="course course-li">
            <img
              className="icons course-icons"
              src={fcc}
              alt="freecodecamp logo"
              height="35,5"
              width="50"
            />
            JavaScript Algorithms and Data Structures - 02.12.20
          </li>
        </ul>
      </div>
      <Footer footerStyle="footer" />
    </div>
  );
};

export default Second;
