import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Project from "./pages/Project/Project"
import NoMatch from "./pages/NoMatch/NoMatch";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/project/:id" component={Project} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;