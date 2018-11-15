import React, {Component} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Schedule from "./components/Schedule";
import "./sass/general.sass";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <Balance />
          <Schedule />
        </main>
        <div>Nav</div>
      </div>
    );
  }
}

export default App;
