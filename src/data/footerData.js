import GitHubIcon from "@material-ui/icons/GitHub";
import CreateIcon from "@material-ui/icons/Create";
import WebIcon from "@material-ui/icons/Web";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";

const footerData = [
  { link: "https://create-react-app.com/", icon: <CreateIcon />, text: "Blog" },
  { link: "https://villivald.com/", icon: <WebIcon />, text: "Site" },
  {
    link: "https://github.com/villivald",
    icon: <GitHubIcon />,
    text: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/maxim-villivald-4b1b311a3/",
    icon: <LinkedInIcon />,
    text: "LinkedIn",
  },
  {
    link: "mailto:maxim.villivald@gmail.com",
    icon: <MailIcon />,
    text: "Email",
  },
  {
    link: "https://t.me/create_react_app",
    icon: <TelegramIcon />,
    text: "Telegram",
  },
  {
    link: "https://twitter.com/crapp_blog",
    icon: <TwitterIcon />,
    text: "Twitter",
  },
];

export default footerData;
