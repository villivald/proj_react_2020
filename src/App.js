import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Uses from "./pages/uses";
import Courses from "./pages/courses";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/uses" exact component={Uses} />
        <Route path="/courses" exact component={Courses} />
      </Switch>
    </Router>
  );
};

export default App;
