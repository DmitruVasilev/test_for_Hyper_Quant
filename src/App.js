import React, {Component} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Schedule from "./components/Schedule";
import BotList from "./components/BotList";
import data from "./data.min";
import "./sass/general.sass";

console.log("---", data);

class App extends Component {
  state = {
    filter_value: "24h",
  };

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
          <BotList bots={data.bots} filter_value={this.state.filter_value} />
        </main>
        <div>Nav</div>
      </div>
    );
  }
}

export default App;
