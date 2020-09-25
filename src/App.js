import React from "react";
import Grid from "./components/Grid";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Screens from "./components/Screens";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="main">
      <Menu />
      <Grid />
      <Stats />
      <Screens />
      <Footer />
    </div>
  );
};

export default App;
