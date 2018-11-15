import React, {Component} from "react";
import Header from "./components/Header";
import "./sass/general.sass";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>Main</div>
        <div>Nav</div>
      </div>
    );
  }
}

export default App;
