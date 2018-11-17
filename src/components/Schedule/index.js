import React from "react";
import schedule from "../../img/schedule.png";
import "./Schedule.sass";

const Schedule = () => (
  <section className="schedule">
    <img src={schedule} alt="schedule" />
    <span className="schedule__value">+32.6%</span>
  </section>
);

export default Schedule;
