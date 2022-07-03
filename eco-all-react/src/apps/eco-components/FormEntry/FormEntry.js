import React from "react";
import Input from "../../eco-elements/Input/Input";
import PropTypes from "prop-types";
import "./FormEntry.css";

const FormEntry = ({ label, description, feedback, error, ...rest }) => {
  return (
    <div className="FormEntry">
      {label && <p className="label">{label}</p>}
      {description && <p className="description">{description}</p>}
      <Input {...rest} error={error} />
      {feedback && (
        <p className={`feedback ${error ? "feedback-error" : ""}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

FormEntry.propTypes = {
  /**
   * The label on top of the input
   */
  label: PropTypes.string,
  /**
   * The description of the input below the label
   */
  description: PropTypes.string,
  /**
   * The placeholder of the input
   */
  placeholder: PropTypes.string,
};

export default FormEntry;
