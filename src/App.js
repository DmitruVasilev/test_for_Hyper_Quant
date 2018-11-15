import React, {Component} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Schedule from "./components/Schedule";
import data from "./data.min";
import "./sass/general.sass";

console.log("---", data);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <Balance
            balance={data.balance}
            on_hold={data.on_hold}
            trading_capital={data.trading_capital}
            trading_capital_currency={data.trading_capital_currency}
          />
          <Schedule />
        </main>
        <div>Nav</div>
      </div>
    );
  }
}

export default App;
