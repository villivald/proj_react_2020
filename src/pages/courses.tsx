import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Course from "../components/Course";
import styled from "@emotion/styled";
import Colors from "../constants/colors";
import Arrow from "../components/Arrow";
import BackButton from "../components/BackButton";
import "../css/courses.css";
import courses from "../data/coursesData";
import ongoingCourses from "../data/ongoingCoursesData";

const H1 = styled.h1`
  color: ${Colors.gray};
  padding: 10px 20px 10px 20px;
`;

const Second: FunctionComponent = () => {
  const Courses = courses.map((course) => (
    <Course
      pic={course.pic}
      alt={course.alt}
      height={course.height}
      width={course.width}
      link={course.link}
      name={course.name}
      date={course.date}
    />
  ));
  const OngoingCourses = ongoingCourses.map((course) => (
    <Course
      pic={course.pic}
      alt={course.alt}
      height={course.height}
      width={course.width}
      link={course.link}
      name={course.name}
    />
  ));
  return (
    <div className="main">
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic=""
        setMainStyle=""
      />
      <BackButton />

      <div className="courses">
        <ul>
          <H1 className="contacts houdini">Courses & Certifications</H1>
          <h2 className="h2-courses">Completed</h2>
          {Courses}
          <h2 className="h2-courses">Ongoing</h2>
          {OngoingCourses}
        </ul>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default Second;
