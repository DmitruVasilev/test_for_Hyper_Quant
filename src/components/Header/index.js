import React, {Component} from "react";
import Hamburger from "../Hamburger";
import Logo from "../Logo";
import Refresh from "../Refresh";
import "./Header.sass";

class App extends Component {
  render() {
    return (
      <header className="header">
        <Hamburger />
        <Logo>Dashboard</Logo>
        <Refresh />
      </header>
    );
  }
}

export default App;
