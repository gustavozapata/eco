import React from "react";
import { addClassNames, addPropValuesAsClass } from "../utils";
import "./Section.css";

/**
DOCS: 
* This allows to determine the width of a section using easy-to-use/remember props

props {
  split - make sure to supply same amount of elements as split
  width - standard css element's width
  className - standard css element's className (can be multiple classes)
}
*/

const Section = (props) => {
  const { children, className, width, split, ...rest } = props;

  return (
    <div
      className={`Section ${
        split > 1 ? "Section-split" : ""
      } ${addPropValuesAsClass("Section", rest)} ${addClassNames(className)}`}
      style={{ width }}
    >
      {children}
    </div>
  );
};

Section.defaultProps = {
  // width: "100%",
  split: 0,
};

export default Section;
