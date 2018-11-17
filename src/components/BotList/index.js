import React, {Component} from "react";
import PropTypes from "prop-types";
import "./BotList.sass";

class BotList extends Component {
  static propTypes = {
    // from filter
    filter_value: PropTypes.string.isRequired,
    // from data
    bots: PropTypes.arrayOf(
      PropTypes.shape({
        cost: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        "24h": PropTypes.number.isRequired,
        "7d": PropTypes.number.isRequired,
        "30d": PropTypes.number.isRequired,
        all_time: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const {bots, filter_value} = this.props;
    /*eslint-disable */
    return (
      <section>
        <ul className="bot_list">
          {bots.map((bot) => (
            <li key={bot.cost} className="bot_list__item">
              <a href="#" className="bot">
                <span className={`bot__icon bot__icon--${bot.name}`} />
                <span className={`bot__name ${bot.name === "dark_bot" && "bot__name--dark"}`}>{bot.action}</span>
                <span
                  className={`bot__value
                    ${bot.name === "dark_bot" && "hidden"}
                    bot__value--${bot[filter_value] < 0 ? "less" : "more"}`}
                >
                  {bot[filter_value] < 0 ? "" : "+"}
                  {bot[filter_value]}%
                </span>
              </a>
              {bot.name === "yellow_bot" && (
                <span>
                  <span className="bot__line bot__line--top-left" />
                  <span className="bot__line bot__line--top-right" />
                  <span className="bot__line bot__line--bottom-left" />
                  <span className="bot__line bot__line--bottom-right" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default BotList;
