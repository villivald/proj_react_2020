import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate, serif",
    borderRadius: 5,
    paddingRight: 20,
  },
})(Paper);

const Uses = () => {
  return (
    <div className="main">
      <Menu />
      <h1>Uses</h1>
      <div className="uses-wrapper">
        The following is a list of the tools and software that I use on a daily
        basis. This page was inspired by Wes Bos and his project -
        https://uses.tech/.
      </div>
      <div className="uses">
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
              Code editor: VS Code, Theme: Dark+, Font: Dank Mono
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🐚
              </span>
              macOS Terminal + Zsh + OhMyZsh
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                👾
              </span>
              Chrome, Firefox Dev
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                ✉️
              </span>
              Gmail/Spark
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📋
              </span>
              Todoist
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📁
              </span>
              Notion
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                💬
              </span>
              Telegram
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                👨‍💻
              </span>
              Teams
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🗄
              </span>
              OneNote
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📆
              </span>
              Calendars 5
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🗂
              </span>
              Pocket
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🏋️‍♀️
              </span>
              Strava
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📚
              </span>
              Bookmate/Books/Audible
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                📻
              </span>
              Pocket Casts
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🥷
              </span>
              Tweetbot
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                ✍️
              </span>
              Grammarly
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                🎶
              </span>
              Endel
            </li>
            <li className="use">
              <span className="emoji" role="img" aria-label="bike">
                💾
              </span>
              Transmit
            </li>
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <div className="usesBox">
            <h2>Other</h2>
          </div>
          <ul>
            <li className="use">
              <span role="img" aria-label="bike">
                🚴
              </span>
               Serious Grafix Gravel Bike
            </li>
            <li className="use">
              <span role="img" aria-label="bike">
                🎒
              </span>
               Roka Utility Pack
            </li>
            <li className="use">
              <span role="img" aria-label="bike">
                🍼
              </span>
               Hydro Flask
            </li>
          </ul>
        </StyledPaper>
      </div>
      <Footer />
    </div>
  );
};

export default Uses;
