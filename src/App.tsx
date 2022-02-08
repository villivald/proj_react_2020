import { lazy, Suspense, FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import BeatLoader from "react-spinners/BeatLoader";
import Colors from "./constants/colors";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

const About = lazy(() => import("./pages/about"));
const Uses = lazy(() => import("./pages/uses"));
const Contact = lazy(() => import("./pages/contact"));
const Courses = lazy(() => import("./pages/courses"));
const Books = lazy(() => import("./pages/books"));
const Projects = lazy(() => import("./pages/projects"));
const ReactProjects = lazy(() => import("./pages/react"));
const AllProjects = lazy(() => import("./pages/allProjects"));
const Stats = lazy(() => import("./pages/stats"));
const OldWebsites = lazy(() => import("./pages/old-website"));
const BookList = lazy(() => import("./pages/bookList"));
const NotFoundPage = lazy(() => import("./pages/404"));

const RenderResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>Navigation</div>
        ) : (
          <div className={`kbar ${active ? "activeBar" : ""}`}>
            <div className="kbar-item">
              {item.name}
              <p>{item.keywords}</p>
            </div>
            <span>{item.shortcut}</span>
          </div>
        )
      }
    />
  );
};

const App: FunctionComponent = () => {
  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home page",
      perform: () => (window.location.pathname = "/"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about me",
      perform: () => (window.location.pathname = "about"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "my contacts",
      perform: () => (window.location.pathname = "contact"),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "all my coding projects",
      perform: () => (window.location.pathname = "projects"),
    },
    {
      id: "uses",
      name: "Uses",
      shortcut: ["u"],
      keywords: "tools and technologies I am using",
      perform: () => (window.location.pathname = "uses"),
    },
    {
      id: "courses",
      name: "Courses",
      shortcut: ["r"],
      keywords: "courses and certifications",
      perform: () => (window.location.pathname = "courses"),
    },
    {
      id: "books",
      name: "Books",
      shortcut: ["b"],
      keywords: "books I read",
      perform: () => (window.location.pathname = "books"),
    },
  ];
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="kbarContainer">
            <KBarSearch className="kbarInput" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <Router>
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/uses" exact component={Uses} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/books" exact component={Books} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/react" exact component={ReactProjects} />
            <Route path="/allProjects" exact component={AllProjects} />
            <Route path="/stats" exact component={Stats} />
            <Route path="/old-website" exact component={OldWebsites} />
            <Route path="/bookList" exact component={BookList} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
    </KBarProvider>
  );
};

export default App;
