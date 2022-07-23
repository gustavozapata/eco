import React, { useRef, useState } from "react";
import Icon from "../../eco-elements/Icon/Icon";
import useOutsideClick from "../hooks/useOutsideClick";
import "./Dropdown.css";

const Dropdown = ({ name, options, isCustom, selected, handleSelect }) => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });

  const handleChange = (selectedValue) => {
    handleSelect(selectedValue);
    setShow(false);
  };

  const CustomDropdown = () => (
    <div ref={ref} className="custom-dropdown" onClick={() => setShow(!show)}>
      <div className="custom-selector">
        <span className="custom-selector-text">{selected?.label}</span>
        <Icon name="arrow" rotate={show ? "ninety" : ""} fill="tertiary" />
      </div>
      {show && (
        <div className="custom-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="custom-option"
              onClick={() => handleChange(option)}
            >
              <span>
                {option.icon && (
                  <span className="custom-option-icon">
                    <Icon name={option.icon} />
                  </span>
                )}
                {option.label}
              </span>
              {option.command && (
                <span className="custom-option-command">{option.command}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const placeholder = {
    disabled: true,
    hidden: false,
    value: "Select an option",
  };

  const DefaultDropdown = () => (
    <select name={name} defaultValue={placeholder.value}>
      <option {...placeholder}>{placeholder.value}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className="Dropdown">
      {isCustom ? <CustomDropdown /> : <DefaultDropdown />}
    </div>
  );
};

export default Dropdown;
