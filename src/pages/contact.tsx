import React, {FunctionComponent} from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import github from "../images/github.png";
import blog from "../images/wordpress.png";
import linkedin from "../images/linkedin.png";
import telegram from "../images/telegram.png";
import mail from "../images/gmail.png";
import twitter from "../images/twitter.png";
import strava from "../images/strava.png";
import medium from "../images/medium.png";

const Second: FunctionComponent = () => {
  return (
    <div className="main">
      <Menu menuStyle="menu" ButtonDisplay="none" />
      <h1 className="contacts">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-badges">
          <a href="https://dev.to/villivald">
            <img
              className="icons"
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="MV's DEV Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="https://github.com/villivald">
            <img
              className="icons"
              src={github}
              alt="MV's GitHub Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="https://create-react-app.com/">
            <img
              className="icons"
              src={blog}
              alt="MV's Wordpress Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="https://www.linkedin.com/in/maxim-villivald-4b1b311a3/">
            <img
              className="icons"
              src={linkedin}
              alt="MV's LinkedIn Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="https://t.me/create_react_app">
            <img
              className="icons"
              src={telegram}
              alt="MV's Telegram Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="https://twitter.com/crapp_blog">
            <img
              className="icons"
              src={twitter}
              alt="MV's Twitter Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="mailto:maxim.villivald@gmail.com">
            <img
              className="icons"
              src={mail}
              alt="MV's Email"
              height="30"
              width="30"
            />
          </a>
          <a href="https://www.strava.com/athletes/42251423">
            <img
              className="icons"
              src={strava}
              alt="MV's Strava Profile"
              height="30"
              width="30"
            />
          </a>
          <a href="https://create-react-app.medium.com/">
            <img
              className="icons"
              src={medium}
              alt="MV's Medium Profile"
              height="30"
              width="30"
            />
          </a>
        </div>
      </div>
      <Footer footerStyle="footer" />
    </div>
  );
};

export default Second;
