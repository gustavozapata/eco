import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  value,
  name,
  placeholder,
  handleChange,
  type,
  disabled,
  error,
}) => {
  return (
    <div className="Input">
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? "error" : ""}
        onChange={handleChange}
      />
    </div>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Input.propTypes = {
  /**
   * Unique name to identify the label and input
   */
  name: PropTypes.string,
  /**
   * The type of the input. Could be text, password, email, number
   */
  type: PropTypes.oneOf(["text", "password", "email", "number"]),

  // Functions
  handleClick: PropTypes.func,
};

Input.defaultProps = {
  //   label: "",
  //   handleClick: () => {},
};

export default Input;
