import React from "react";
import PropTypes from "prop-types";
import "./Balance.sass";

const Balance = ({balance, on_hold, trading_capital, trading_capital_currency}) => (
  <section className="balance">
    <div className="capital">
      <span className="capital__caption">trading capital</span>
      <span className="capital__value">
        {trading_capital} {trading_capital_currency}
      </span>
    </div>
    <ul className="balance__list">
      <li className="balance__item">
        <span className="balance__caption">balance:</span>
        <span className="balance__value">{balance}</span>
        <span className="balance__icon" />
      </li>
      <li className="balance__item">
        <span className="balance__caption">on hold:</span>
        <span className="balance__value">{on_hold}</span>
        <span className="balance__icon" />
      </li>
    </ul>
  </section>
);

Balance.propTypes = {
  // from data
  on_hold: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  trading_capital: PropTypes.number.isRequired,
  trading_capital_currency: PropTypes.string.isRequired,
};

export default Balance;
