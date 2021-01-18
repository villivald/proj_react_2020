import React, { lazy, Suspense, FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import BeatLoader from "react-spinners/BeatLoader";
import Colors from "./constants/colors";

const About = lazy(() => import("./pages/about"));
const Uses = lazy(() => import("./pages/uses"));
const Contact = lazy(() => import("./pages/contact"));
const Courses = lazy(() => import("./pages/courses"));
const Books = lazy(() => import("./pages/books"));

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 100,
              }}
            >
              <BeatLoader color={Colors.blog} size={30} loading={true} />
            </div>
          }
        >
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
