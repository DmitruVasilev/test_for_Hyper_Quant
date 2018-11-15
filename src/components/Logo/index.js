import React from "react";
import PropTypes from "prop-types";
import "./Logo.sass";

const Hamburger = ({children}) => (
  <div className="logo">
    <a href="/" className="logo__link">
      {children}
    </a>
  </div>
);

Hamburger.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Hamburger;
