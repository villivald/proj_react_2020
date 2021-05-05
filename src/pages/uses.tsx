import { useState, FunctionComponent } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import uses from "../images/uses.webp";
import cat from "../images/cat.webp";
import catPic from "../images/catPic.webp";
import List from "../components/List";
import Arrow from "../components/Arrow";
import "../css/uses.css";

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate, serif",
    borderRadius: 5,
    paddingRight: 20,
  },
})(Paper);

const Uses: FunctionComponent = () => {
  const [displayState, setDisplayState] = useState("none");
  const handlePic = () => {
    setDisplayState("list-item");
  };
  const handlePicOut = () => {
    setDisplayState("none");
  };
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ padding: "10px 20px 10px 20px" }} className="houdini">
          Uses
        </h1>
      </div>
      <div className="contact-wrapper">
        <img
          style={{ marginBottom: "50px" }}
          src={uses}
          alt="Uses"
          width="50%"
        />
      </div>
      <div className="uses-wrapper">
        The following is a list of the tools and software that I use on a daily
        basis. This page was inspired by Wes Bos and his project -
        https://uses.tech.
      </div>
      <div className="uses">
        <div
          className="catHover"
          onMouseOver={handlePic}
          onMouseOut={handlePicOut}
        >
          <img src={catPic} alt="cat"></img>
        </div>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Hardware</h2>
          </div>
          <ul>
            <img
              src={cat}
              alt="pic"
              width="50%"
              style={{
                display: displayState,
                position: "absolute",
                transform: "translateX(80px) translateY(-92px)",
              }}
            />
            <List
              emoji="💻"
              name="MacBook Pro 13 2017"
              link="https://www.apple.com/fi/macbook-pro-13/"
            />
            <List
              emoji="📱"
              name="iPhone 11"
              link="https://www.apple.com/shop/buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked"
            />
            <List
              emoji="🍏"
              name="iPad 10,2 2019"
              link="https://www.apple.com/ipad-10.2/"
            />
            <List
              emoji="⌚️"
              name="Polar Vantage V"
              link="https://www.polar.com/en/vantage/v"
            />
            <List
              emoji="🎧"
              name="Corsair HS60"
              link="https://www.corsair.com/us/en/Categories/Products/Gaming-Headsets/Stereo-Headsets/HS60/p/CA-9011173-NA"
            />
            <List
              emoji="🎧"
              name="Jabra Elite Active 65T"
              link="https://www.jabra.com/bluetooth-headsets/jabra-elite-active-65t?_ga=2.179610726.358933741.1605687397-815382529.1605687397##100-99010000-02"
            />
            <List
              emoji="📺"
              name="Asus VC279H 27"
              link="https://www.asus.com/Monitors/VC279H/"
            />
            <List
              emoji="💽"
              name="WD My Passport for Mac"
              link="https://shop.westerndigital.com/products/portable-drives/wd-my-passport-for-mac-usb-3-0-hdd#WDBA2D0020BBL-WESN"
            />
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Software</h2>
          </div>
          <ul>
            <List
              emoji="🖥"
              name="VS Code + Dark + Dank Mono"
              link="https://code.visualstudio.com/"
            />
            <List
              emoji="🐚"
              name="macOS Terminal + Zsh + OhMyZsh"
              link="https://ohmyz.sh/"
            />
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                👾
              </span>
              <a href="https://www.google.com/intl/en/chrome/">Chrome</a>+
              <a href="https://www.mozilla.org/en-US/firefox/developer/">
                Firefox Dev
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                ✉️
              </span>
              <a href="https://www.google.com/gmail/">Gmail</a>+
              <a href="https://sparkmailapp.com/">Spark</a>
            </li>
            <List
              emoji="📋"
              name={<s>Todoist</s>}
              link="https://todoist.com/"
              newName={"→ Things"}
              newLink="https://culturedcode.com/things/"
            />
            <List emoji="📁" name="Notion" link="https://www.notion.so/" />
            <List emoji="💬" name="Telegram" link="https://web.telegram.org/" />
            <List
              emoji="👨‍💻"
              name="Teams"
              link="https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software"
            />
            <List
              emoji="🗄"
              name={<s>OneNote</s>}
              link="https://www.onenote.com/"
              newName={"→ Notability"}
              newLink="https://www.gingerlabs.com/"
            />
            <List
              emoji="📆"
              name="Calendars 5"
              link="https://readdle.com/calendars5"
            />
            <List emoji="🗂" name="Pocket" link="https://getpocket.com/" />
            <List
              emoji="🏋️‍♀️"
              name="Strava"
              link="https://www.strava.com/athletes/42251423"
            />
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📚
              </span>
              <a href="https://bookmate.com/@platonlliv/books/all">Bookmate</a>{" "}
              + <a href="https://www.apple.com/apple-books/">Books</a> +{" "}
              <a href="https://www.audible.co.uk/">Audible</a>
            </li>
            <List
              emoji="📻"
              name="Pocket Casts"
              link="https://www.pocketcasts.com/"
            />
            <List
              emoji="🥷"
              name="Tweetbot"
              link="https://tapbots.com/tweetbot/"
            />
            <List
              emoji="✍️"
              name="Grammarly"
              link="https://www.grammarly.com/"
            />
            <List emoji="🎶" name="Endel" link="https://endel.io/" />
            <List
              emoji="💾"
              name="Transmit"
              link="https://panic.com/transmit/"
            />
            <List emoji="🔑" name="Bitwarden" link="https://bitwarden.com/" />
            <List emoji="📡" name="Surfshark" link="https://surfshark.com/" />
            <List emoji="⌨️" name="Obsidian" link="https://obsidian.md/" />
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Other</h2>
          </div>
          <ul>
            <List
              emoji="🚴"
              name="Serious Grafix Gravel Bike"
              link="https://www.serious-cycles.com/kategorie/gravelbikes/gravelbikes-serie-serious-grafix/"
            />
            <List
              emoji="🎒"
              name="Roka Utility Pack"
              link="https://www.roka.com/products/utility-pack"
            />
            <List
              emoji="🍼"
              name="Hydro Flask"
              link="https://www.hydroflask.com/21-oz-standard-mouth"
            />
            <List
              emoji="📝"
              name="Moleskine"
              link="https://fi.moleskine.com/18-month-daily-planner-black/p1831"
            />
            <List
              emoji="🖊"
              name="Muji pens"
              link="https://www.mujionline.eu/uk/stationery/pens-and-pencils/gel-ink-pens"
            />
          </ul>
        </StyledPaper>
      </div>
      <Footer footerStyle="footer" footerTextStyle="a" />
      <Arrow />
    </div>
  );
};

export default Uses;
