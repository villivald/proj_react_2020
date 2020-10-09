import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import First from "./pages/first";
import Second from "./pages/second";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/first" exact component={First} />
        <Route path="/second" exact component={Second} />
      </Switch>
    </Router>
  );
};

export default App;
