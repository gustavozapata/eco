import React from "react";
import { addClassNames, addPropKeysAsClass } from "../utils";
import "./Wrapper.css";

/**
DOCS:
* This is a full width (occupies full width of parent) wrapper that fits in most parent elements and can be flex, absolute, etc
*/

// TODO: an element can have 'style', 'classes', 'events', 'id'
const generateClasses = (classNames) => {};
const generateStyles = () => {};

const Wrapper = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      // className={generateClasses(className)}
      // style={generateStyles()}
      className={`Wrapper ${addClassNames(className)} ${addPropKeysAsClass(
        "Wrapper",
        rest
      )}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
