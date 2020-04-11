import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ProjectSubPage from "./pages/ProjectSubPage";
import { act } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "Home",
    };
  }

  componentDidMount() {
    this.addPageActiveClass();
  }

  componentDidUpdate() {
    this.addPageActiveClass();
  }

  addPageActiveClass() {
    const location = window.location.pathname;
    document.querySelector(".active-page").classList.remove("active-page");

    switch (location) {
      case "/":
        document.querySelector("#home-nav-link").classList.add("active-page");
        break;
      case "/aboutMe":
        document.querySelector("#about-nav-link").classList.add("active-page");
        break;
      case "/projects":
        document.querySelector("#project-nav-link").classList.add("active-page");
        break;
      case "/contactMe":
        document.querySelector("#contact-nav-link").classList.add("active-page");
        break;
      default:
        break;
    }
  }

  changePage = (newPage) => {
    this.setState({ activePage: newPage });
  };

  render() {
    const ProjectSubPageComponent = (projectInfo) => {
      return <ProjectSubPage projectInfo={projectInfo} />;
    };

    return (
      <Router>
        <NavBar
          activePage={this.state.activePage}
          changePage={this.changePage}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutMe" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contactMe" component={Contact} />
          <Route
            exact
            path="/projectSubPage"
            component={ProjectSubPageComponent}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
