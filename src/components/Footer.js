import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import CreateIcon from "@material-ui/icons/Create";
import WebIcon from "@material-ui/icons/Web";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <Breadcrumbs aria-label="breadcrumb">
          <a href="https://create-react-app.com/">
            <CreateIcon />
            <Link color="inherit">Blog</Link>
          </a>
          <a href="https://proj.create-react-app.com/">
            <WebIcon />
            <Link color="inherit">Site</Link>
          </a>
          <a href="https://github.com/villivald">
            <GitHubIcon />
            <Link color="inherit">GitHub</Link>
          </a>
          <a href="https://www.linkedin.com/in/maxim-villivald-4b1b311a3/">
            <LinkedInIcon />
            <Link color="inherit">LinkedIn</Link>
          </a>
          <a href="mailto:maxim.villivald@gmail.com">
            <MailIcon />
            <Link color="inherit">Email</Link>
          </a>
          <a href="https://t.me/create_react_app">
            <TelegramIcon />
            <Link color="inherit">Telegram</Link>
          </a>
          <a href="https://twitter.com/crapp_blog">
            <TwitterIcon />
            <Link color="inherit">Twitter</Link>
          </a>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Footer;
