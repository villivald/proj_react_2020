import React, { FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

import github from "../images/github1.webp";
import blog from "../images/wordpress.webp";
import linkedin from "../images/linkedin.webp";
import telegram from "../images/telegram.webp";
import mail from "../images/gmail.webp";
import twitter from "../images/twitter.webp";
import strava from "../images/strava.png";
import medium from "../images/medium.webp";

const Second: FunctionComponent = () => {
  return (
    <div className="main">
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        DropdownMenuStyle=""
        setMainStyle=""
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{ padding: "10px 20px 10px 20px" }}
          className="contacts houdini"
        >
          Contact
        </h1>
      </div>
      <div className="contact-wrapper">
        <div className="contact-badges">
          <Contact
            link={"https://dev.to/villivald"}
            picture={"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"}
            alt={"MV's DEV Profile"}
          />
          <Contact
            link={"https://github.com/villivald"}
            picture={github}
            alt={"MV's GitHub Profile"}
          />
          <Contact
            link={"https://create-react-app.com/"}
            picture={blog}
            alt={"MV's Wordpress Profile"}
          />
          <Contact
            link={"https://www.linkedin.com/in/maxim-villivald-4b1b311a3/"}
            picture={linkedin}
            alt={"MV's DEV Profile"}
          />
          <Contact
            link={"https://t.me/create_react_app"}
            picture={telegram}
            alt={"MV's Telegram Profile"}
          />
          <Contact
            link={"https://twitter.com/crapp_blog"}
            picture={twitter}
            alt={"MV's Twitter Profile"}
          />
          <Contact
            link={"mailto:maxim.villivald@gmail.com"}
            picture={mail}
            alt={"MV's Email"}
          />
          <Contact
            link={"https://www.strava.com/athletes/42251423"}
            picture={strava}
            alt={"MV's Strava Profile"}
          />
          <Contact
            link={"https://create-react-app.medium.com/"}
            picture={medium}
            alt={"MV's Medium Profile"}
          />
        </div>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
    </div>
  );
};

export default Second;
