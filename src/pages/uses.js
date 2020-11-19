import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import uses from "../images/uses.webp";
import cat from "../images/cat.webp";
import catPic from "../images/catPic.webp";

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate, serif",
    borderRadius: 5,
    paddingRight: 20,
  },
})(Paper);

const Uses = () => {
  const [displayState, setDisplayState] = useState("none");
  const handlePic = () => {
    setDisplayState("list-item");
  };
  const handlePicOut = () => {
    setDisplayState("none");
  };
  return (
    <div className="main">
      <Menu />
      <h1>Uses</h1>
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
        https://uses.tech/.
      </div>
      <div className="uses">
        <div
          onMouseOver={handlePic}
          onMouseOut={handlePicOut}
          style={{
            width: "100px",
            height: "100px",
            marginLeft: "-160px",
            borderRadius: "50%",
            backgroundColor: "#25A2B9",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={catPic} alt="cat"></img>
        </div>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Hardware</h2>
          </div>
          <ul>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                💻
              </span>
              <a href="https://www.apple.com/fi/macbook-pro-13/">
                MacBook Pro 13" 2017
              </a>
            </li>
            <img
              src={cat}
              alt="pic"
              width="60%"
              style={{
                display: displayState,
                position: "absolute",
                transform: "translateX(50px) translateY(-100px)",
              }}
            />
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📱
              </span>
              <a href="https://www.apple.com/shop/buy-iphone/iphone-11/6.1-inch-display-64gb-green-unlocked">
                iPhone 11
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🍏
              </span>
              <a href="https://www.apple.com/ipad-10.2/">iPad 10,2" 2019</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                ⌚️
              </span>
              <a href="https://www.polar.com/en/vantage/v">Polar Vantage V</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🎧
              </span>
              <a href="https://www.corsair.com/us/en/Categories/Products/Gaming-Headsets/Stereo-Headsets/HS60/p/CA-9011173-NA">
                Corsair HS60
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🎧
              </span>
              <a href="https://www.jabra.com/bluetooth-headsets/jabra-elite-active-65t?_ga=2.179610726.358933741.1605687397-815382529.1605687397##100-99010000-02">
                Jabra Elite Active 65T
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📺
              </span>
              <a href="https://www.asus.com/Monitors/VC279H/">
                Asus VC279H 27"
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                💽
              </span>
              <a href="https://shop.westerndigital.com/products/portable-drives/wd-my-passport-for-mac-usb-3-0-hdd#WDBA2D0020BBL-WESN">
                WD My Passport for Mac
              </a>
            </li>
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Software</h2>
          </div>
          <ul>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🖥
              </span>
              <a href="https://code.visualstudio.com/">
                VS Code + Dark + Dank Mono
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🐚
              </span>
              <a href="https://ohmyz.sh/">macOS Terminal + Zsh + OhMyZsh</a>
            </li>
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
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📋
              </span>
              <a href="https://todoist.com/">Todoist</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📁
              </span>
              <a href="https://www.notion.so/">Notion</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                💬
              </span>
              <a href="https://web.telegram.org/">Telegram</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                👨‍💻
              </span>
              <a href="https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software">
                Teams
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🗄
              </span>
              <a href="https://www.onenote.com/">OneNote</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📆
              </span>
              <a href="https://readdle.com/calendars5">Calendars 5</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🗂
              </span>
              <a href="https://getpocket.com/">Pocket</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🏋️‍♀️
              </span>
              <a href="https://www.strava.com/athletes/42251423">Strava</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📚
              </span>
              <a href="https://bookmate.com/@platonlliv/books/all">Bookmate</a>{" "}
              + <a href="https://www.apple.com/apple-books/">Books</a> +{" "}
              <a href="https://www.audible.co.uk/">Audible</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📻
              </span>
              <a href="https://www.pocketcasts.com/">Pocket Casts</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🥷
              </span>
              <a href="https://tapbots.com/tweetbot/">Tweetbot</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                ✍️
              </span>
              <a href="https://www.grammarly.com/">Grammarly</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🎶
              </span>
              <a href="https://endel.io/">Endel</a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                💾
              </span>
              <a href="https://panic.com/transmit/">Transmit</a>
            </li>
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Other</h2>
          </div>
          <ul>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🚴
              </span>
              <a href="https://www.serious-cycles.com/kategorie/gravelbikes/gravelbikes-serie-serious-grafix/">
                Serious Grafix Gravel Bike
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🎒
              </span>
              <a href="https://www.roka.com/products/utility-pack">
                Roka Utility Pack
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🍼
              </span>
              <a href="https://www.hydroflask.com/21-oz-standard-mouth">
                Hydro Flask
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📝
              </span>
              <a href="https://fi.moleskine.com/18-month-daily-planner-black/p1831">
                Moleskine
              </a>
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🖊
              </span>
              <a href="https://www.mujionline.eu/uk/stationery/pens-and-pencils/gel-ink-pens">
                Muji pens
              </a>
            </li>
          </ul>
        </StyledPaper>
      </div>
      <Footer />
    </div>
  );
};

export default Uses;
