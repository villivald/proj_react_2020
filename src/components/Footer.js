import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

//Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import CreateIcon from "@material-ui/icons/Create";
import WebIcon from "@material-ui/icons/Web";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <div className={props.footerStyle}>
        <Breadcrumbs aria-label="breadcrumb">
          <a href="https://create-react-app.com/">
            <CreateIcon />
            Blog
          </a>
          <a href="https://proj.create-react-app.com/">
            <WebIcon />
            Site
          </a>
          <a href="https://github.com/villivald">
            <GitHubIcon />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/maxim-villivald-4b1b311a3/">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="mailto:maxim.villivald@gmail.com">
            <MailIcon />
            Email
          </a>
          <a href="https://t.me/create_react_app">
            <TelegramIcon />
            Telegram
          </a>
          <a href="https://twitter.com/crapp_blog">
            <TwitterIcon />
            Twitter
          </a>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Footer;
