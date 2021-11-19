import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App1 = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App1;
