import React from "react";
import PropTypes from "prop-types";
import "./TimeRange.sass";

const TimeRange = ({onChangeTime, stateTime}) => (
  <section className="time-range">
    <span className="time-range__caption">Time Range:</span>
    <button
      className={`time-range__btn ${stateTime === "24h" ? "time-range__btn--active" : ""}`}
      type="button"
      onClick={() => onChangeTime("24h")}
    >
      24h
    </button>
    <button
      className={`time-range__btn ${stateTime === "7d" ? "time-range__btn--active" : ""}`}
      type="button"
      onClick={() => onChangeTime("7d")}
    >
      7 days
    </button>
    <button
      className={`time-range__btn ${stateTime === "30d" ? "time-range__btn--active" : ""}`}
      type="button"
      onClick={() => onChangeTime("30d")}
    >
      30 days
    </button>
    <button
      className={`time-range__btn ${stateTime === "all_time" ? "time-range__btn--active" : ""}`}
      type="button"
      onClick={() => onChangeTime("all_time")}
    >
      All time
    </button>
  </section>
);

TimeRange.propTypes = {
  // from props
  onChangeTime: PropTypes.func.isRequired,
  stateTime: PropTypes.string.isRequired,
};

export default TimeRange;
