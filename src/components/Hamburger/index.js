import React from "react";
import PropTypes from "prop-types";
import ToggleOpen from "../../decorators/ToggleOpen";
import "./Hamburger.sass";

const Hamburger = ({toggleOpen, isOpen}) => (
  <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
    <span />
    <span />
    <span />
    <span />
  </div>
);

Hamburger.propTypes = {
  // from decorator
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default ToggleOpen(Hamburger);
