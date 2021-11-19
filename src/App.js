import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
  );
};

export default App;
