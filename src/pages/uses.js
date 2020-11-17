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
          <h2>Hardware</h2>
          <ul>
            <li>
              <span role="img" aria-label="bike">
                💻
              </span>
              MacBook Pro 13", 2017 (8GB, 128SSD)
            </li>
            <li>
              <span role="img" aria-label="bike">
                📱
              </span>
              iPhone 11 (64GB)
            </li>
            <li>iPad 10,2" 2019</li>
            <li>Corsair HS60</li>
            <li>Jabra Elite Active 65T</li>
            <li>Asus VC279H 27"</li>
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <h2>Software</h2>
          <ul>
            <li>Code editor: VS Code, Theme: Dark+, Font: Dank Mono</li>
            <li>Mac Terminal + Zsh + OhMyZsh</li>
            <li>Chrome, Firefox Dev</li>
            <li>Gmail/Spark</li>
            <li>Todoist</li>
            <li>Notion</li>
            <li>Telegram</li>
            <li>Teams</li>
            <li>OneNote</li>
            <li>Tweetbot</li>
            <li>Calendars 5</li>
            <li>Pocket</li>
            <li>Strava</li>
            <li>Bookmate/Books/Audible</li>
            <li>Pocket Casts</li>
            <li>Grammarly</li>
            <li>Endel</li>
            <li>Transmit</li>
          </ul>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <h2>Other</h2>
          <ul>
            <li>
              <span role="img" aria-label="bike">
                🚴
              </span>
               Serious Grafix Gravel Bike
            </li>
            <li>
              <span role="img" aria-label="bike">
                🎒
              </span>
               Roka Utility Pack
            </li>
          </ul>
        </StyledPaper>
      </div>
      <Footer />
    </div>
  );
};

export default Uses;
