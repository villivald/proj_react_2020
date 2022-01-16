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
import BackButton from "../components/BackButton";
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
      <BackButton />
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
        <a className="usesTech" href="https://uses.tech">
          uses.tech
        </a>
        .
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
              emoji="🖥"
              name="iMac 24 2021"
              link="https://www.apple.com/fi/imac-24/"
            />
            <List
              emoji="💻"
              name="MacBook Pro 13 2017"
              link="https://www.apple.com/fi/macbook-pro-13/"
            />
            <List
              emoji="💻"
              name="Lenovo ThinkPad T14"
              link="https://www.lenovo.com/fi/fi/laptops/thinkpad/t-series/T14-G2-Intel/p/22TPT14T4N2"
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
              name="Marshall Major IV"
              link="https://www.marshallheadphones.com/fi/en/major-iv.html"
            />
            <List
              emoji="🎧"
              name="JBL UA Flash X"
              link="https://fi.jbl.com/UA+FLASH+X-.html"
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
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🦉
              </span>
              <a href="https://code.visualstudio.com/">VS Code</a>+
              <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
                Night Owl
              </a>
              +<a href="https://philpl.gumroad.com/l/dank-mono">Dank Mono</a>
            </li>
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
              <a href="https://sparkmailapp.com/">Spark</a>+
              <a href="https://support.microsoft.com/en-us/outlook">Outlook</a>
            </li>
            <List
              emoji="📋"
              name={<s>Todoist</s>}
              link="https://culturedcode.com/things/"
              newName={"→ Things"}
              newLink="https://todoist.com/"
            />
            <List emoji="📁" name="Notion" link="https://www.notion.so/" />
            <List emoji="💬" name="Telegram" link="https://web.telegram.org/" />
            <li className="use">
              <span className="emoji" role="img" aria-label="work">
                👨‍💻
              </span>
              <a href="https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software">
                Teams
              </a>
              +<a href="https://slack.com/">Slack</a>
            </li>
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
            <List
              emoji="🗂"
              name={<s>Pocket</s>}
              link="https://getpocket.com/"
              newName="→ Raindrop"
              newLink="https://raindrop.io/"
            />
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
