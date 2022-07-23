import React from "react";
import "./Label.css";

const Label = ({ label, type }) => {
  return <p className={type}>{label}</p>;
};

export default Label;
