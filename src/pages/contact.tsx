import { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import contacts from "../data/contactData";

const Second: FunctionComponent = () => {
  const history = useHistory();

  const routeChange = () => {
    history.goBack();
  };
  const Contacts = contacts.map((contact) => (
    <Contact
      link={contact.link}
      picture={contact.picture}
      alt={`MV's ${contact.alt}`}
    ></Contact>
  ));
  return (
    <div className="main">
      <div id="up"></div>
      <Menu
        menuStyle="menu"
        ButtonDisplay="none"
        mainStyle=""
        Pic="string"
        setMainStyle=""
      />
      <div className="backButton" onClick={routeChange}>
        Back
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{ padding: "10px 20px 10px 20px" }}
          className="contacts houdini"
        >
          Contact
        </h1>
      </div>
      <div className="contact-wrapper">
        <div className="contact-badges">{Contacts}</div>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
    </div>
  );
};

export default Second;
