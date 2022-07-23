import React from "react";
import { addClassNames, addPropKeysAsClass } from "../utils";
import "./Page.css";

/**
DOCS: 
* This is highest level wrapper in which all pages are wrapped
* It doesn't add any spacing (margin, padding, etc)

TODO: each page should specify if it is a landing page or web app page, etc
- this allows to have global styling for that type of page
- also, allowing to have an app with different type of pages

TODO: all the props specification is converted into classes
*/

const Page = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`Page ${addClassNames(className)} ${addPropKeysAsClass(
        "Page",
        rest
      )}`}
    >
      {children}
    </div>
  );
};

export default Page;
