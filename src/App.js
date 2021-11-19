import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import User from "./Components/User";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/user/:name" component={User} />
        <Route component={Error} />
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
  );
};

export default App;
