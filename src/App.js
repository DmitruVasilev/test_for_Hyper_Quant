import React, {Component} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Schedule from "./components/Schedule";
import BotList from "./components/BotList";
import TimeRange from "./components/TimeRange";
import Nav from "./components/Nav";
import data from "./data.min";
import "./sass/general.sass";

class App extends Component {
  state = {
    filter_value: "all_time",
  };

  onChangeTime = (time) => {
    this.setState({filter_value: time});
  };

  render() {
    return (
      <div className="container">
        <Header />
        <main className="main">
          <Balance
            balance={data.balance}
            on_hold={data.on_hold}
            trading_capital={data.trading_capital}
            trading_capital_currency={data.trading_capital_currency}
          />
          <Schedule />
          <BotList bots={data.bots} filter_value={this.state.filter_value} />
          <TimeRange onChangeTime={this.onChangeTime} stateTime={this.state.filter_value} />
        </main>
        <Nav />
      </div>
    );
  }
}

export default App;
