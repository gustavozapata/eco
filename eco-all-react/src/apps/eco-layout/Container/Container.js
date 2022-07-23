import React from "react";
import { addClassNames, addPropKeysAsClass } from "../utils";
import "./Container.css";

/**
DOCS:
* This wraps elements to keep them within website boundaries (max-width: 1200, etc)
* If an element goes outside these boundaries, the Container is close </Container> and this element is wrapped in a new <Section>
*/

const Container = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`Container ${addPropKeysAsClass(
        "Container",
        rest
      )} ${addClassNames(className)}`}
    >
      {children}
    </div>
  );
};

export default Container;
