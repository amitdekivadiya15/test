import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Error from "./Components/Error";
// import User from "./Components/User";
// import Search from "./Components/Search";

// import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import App1 from "./Components/Bootstrap/App1";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/user/:name" component={User} />
        <Route path="/search" component={Search} />
        <Route component={Error} />
      </Switch>

      {/* <About />
      <Contact /> */}

      <App1 />
    </>
  );
};

export default App;
