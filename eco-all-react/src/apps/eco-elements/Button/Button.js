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
  const CustomButton = () => (
    <div className="button custom-button">
      {leftIcon && <Icon name={leftIcon} fill="#fff" />}
      <span className="custom-button-label">{label}</span>
      {rightIcon && <i className={`eco-icon-${rightIcon}`}></i>}
    </div>
  );

  const DefaultButton = () => (
    <button
      className={`button ${variant}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );

  return (
    <div className="Button">
      {rightIcon || leftIcon ? <CustomButton /> : <DefaultButton />}
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
