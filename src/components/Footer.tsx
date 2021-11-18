import { FunctionComponent } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import "../css/footer.css";
import footerData from "../data/footerData";

const Footer: FunctionComponent<{
  footerStyle: string;
  footerTextStyle: string;
}> = (props) => {
  return (
    <div className="footer-wrapper">
      <div className={props.footerStyle}>
        <Breadcrumbs aria-label="breadcrumb">
          {footerData.map((item) => (
            <a
              key={item.link}
              className={props.footerTextStyle}
              href={item.link}
            >
              {item.icon}
              <div className="footer-text" tabIndex={0}>
                {item.text}
              </div>
            </a>
          ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Footer;
