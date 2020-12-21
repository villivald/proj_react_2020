import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Uses from "./pages/uses";
// import Courses from "./pages/courses";
// import Books from "./pages/books";

const About = lazy(() => import("./pages/about"));
const Uses = lazy(() => import("./pages/uses"));
const Contact = lazy(() => import("./pages/contact"));
const Courses = lazy(() => import("./pages/courses"));
const Books = lazy(() => import("./pages/books"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Suspense fallback={<h1>loading...</h1>}>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/uses" exact component={Uses} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/books" exact component={Books} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
