import React from "react";
import "./CodeSnippet.css";

const CodeSnippet = ({ code }) => {
  return (
    <pre className="CodeSnippet">
      <code>{code}</code>
    </pre>
  );
};

export default CodeSnippet;
