import React, {Component} from "react";
import Hamburger from "../Hamburger";

class App extends Component {
  render() {
    return (
      <header className="header">
        <Hamburger />
        <div className="logo">Dashboard</div>
        <div className="refresh">refresh</div>
      </header>
    );
  }
}

export default App;
