import React, {Component} from "react";
import "./Balance.sass";

class App extends Component {
  render() {
    return (
      <section className="balance">
        <div className="capital">
          <span className="capital__caption">trading capital</span>
          <span className="capital__value">1.00865 BTC</span>
        </div>
        <ul className="balance__list">
          <li className="balance__item">
            <span className="balance__caption">balance:</span>
            <span className="balance__value">10 850</span>
            <span className="balance__icon" />
          </li>
          <li className="balance__item">
            <span className="balance__caption">on hold:</span>
            <span className="balance__value">24 000</span>
            <span className="balance__icon" />
          </li>
        </ul>
      </section>
    );
  }
}

export default App;
