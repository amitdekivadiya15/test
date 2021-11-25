import React, { Component } from "react";
import NavBAr from "./NavBAr";
import News from "./News";

export class App5 extends Component {
  render() {
    return (
      <div>
        <NavBAr />
        <News pageSize={5} />
      </div>
    );
  }
}

export default App5;
