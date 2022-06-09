import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import "./Button.css";

const Button = ({
  label,
  leftIcon,
  rightIcon,
  variant,
  disabled,
  handleClick,
}) => {
  return (
    <div className="Button">
      <button className={variant} onClick={handleClick} disabled={disabled}>
        {leftIcon && <Icon name={leftIcon} fill="ffffff" />}
        {label}
      </button>
      {rightIcon && <i className={`eco-icon-${rightIcon}`}></i>}
    </div>
  );
};

Button.propTypes = {
  /**
   * The label of the button
   */
  label: PropTypes.string.isRequired,
  /**
   * The icon to be displayed on the left side of the button
   */
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  variant: PropTypes.string,

  // Functions
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: "Button",
  handleClick: () => {},
};

export default Button;
