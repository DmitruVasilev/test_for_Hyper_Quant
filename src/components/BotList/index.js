import React, {Component} from "react";
import PropTypes from "prop-types";
import "./BotList.sass";

class BotList extends Component {
  static propTypes = {
    // from filter
    filter_value: PropTypes.string.isRequired,
    // from data
    bots: PropTypes.shape({
      optionalProperty: PropTypes.string,
    }).isRequired,
  };

  getBotName = (bot_name) => {
    if (bot_name === "yellow_bot") {
      return "megabot";
    }

    if (bot_name === "green_bot") {
      return "defence";
    }

    if (bot_name === "red_bot") {
      return "attack";
    }

    if (bot_name === "orange_bot") {
      return "attack";
    }

    if (bot_name === "blue_bot") {
      return "balance";
    }

    if (bot_name === "white_bot") {
      return "balance";
    }

    return null;
  };

  render() {
    const {bots, filter_value} = this.props;
    return (
      <section>
        <ul className="bot_list">
          {bots.map((bot) => (
            <li key={bot.cost} className="bot">
              <span className={`bot__icon bot__icon--${bot.name}`} />
              <span className="bot__name">{this.getBotName(bot.name)}</span>
              <span className={`bot__value bot__value--${bot[filter_value] < 0 ? "less" : "more"}`}>
                {bot[filter_value] < 0 ? "" : "+"}
                {bot[filter_value]}%
              </span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default BotList;
