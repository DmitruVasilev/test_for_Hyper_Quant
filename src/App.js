import React, {Component} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./sass/general.sass";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <Balance />
        </main>
        <div>Nav</div>
      </div>
    );
  }
}

export default App;
