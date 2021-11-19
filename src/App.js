import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
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
