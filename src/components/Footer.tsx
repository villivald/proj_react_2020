import { FunctionComponent } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import "../css/footer.css";

//Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import CreateIcon from "@material-ui/icons/Create";
import WebIcon from "@material-ui/icons/Web";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer: FunctionComponent<{
  footerStyle: string;
  footerTextStyle: string;
}> = (props) => {
  return (
    <div className="footer-wrapper">
      <div className={props.footerStyle}>
        <Breadcrumbs aria-label="breadcrumb">
          <a
            className={props.footerTextStyle}
            href="https://create-react-app.com/"
          >
            <CreateIcon />
            <div className="footer-text">Blog</div>
          </a>
          <a
            className={props.footerTextStyle}
            href="https://proj.create-react-app.com/"
          >
            <WebIcon />
            <div className="footer-text">Site</div>
          </a>
          <a
            className={props.footerTextStyle}
            href="https://github.com/villivald"
          >
            <GitHubIcon />
            <div className="footer-text">GitHub</div>
          </a>
          <a
            className={props.footerTextStyle}
            href="https://www.linkedin.com/in/maxim-villivald-4b1b311a3/"
          >
            <LinkedInIcon />
            <div className="footer-text">LinkedIn</div>
          </a>
          <a
            className={props.footerTextStyle}
            href="mailto:maxim.villivald@gmail.com"
          >
            <MailIcon />
            <div className="footer-text">Email</div>
          </a>
          <a
            className={props.footerTextStyle}
            href="https://t.me/create_react_app"
          >
            <TelegramIcon />
            <div className="footer-text">Telegram</div>
          </a>
          <a
            className={props.footerTextStyle}
            href="https://twitter.com/crapp_blog"
          >
            <TwitterIcon />
            <div className="footer-text">Twitter</div>
          </a>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Footer;
