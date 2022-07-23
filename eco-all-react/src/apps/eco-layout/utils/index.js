export const addClassNames = (className) =>
  className ? className.split(" ").join(" ") : "";

// TODO: CHOOSE BETWEEN THESE TWO FUNCTIONS
// MAYBE GO FOR KEYS AS CLASSES SINCE THE OTHER ONE e.g. position="main"
// CAN BE ACHIEVED BY ADDING A CLASS TO THE ELEMENT OR ANOTHER NAMED PROP
// UPDATE: EVEN BETTER, USE THE ACTUAL PROP e.g. position="fixed-left"

// take props and convert them into class names
// <Wrapper flex absolute>
export const addPropKeysAsClass = (layout, rest) =>
  Object.keys(rest)
    .map((prop) => `${layout}-${prop}`)
    .join(" ");

// take value of props and add them as class names
// <Section position="fixed-top" />
export const addPropValuesAsClass = (layout, rest) =>
  Object.values(rest)
    .map((prop) => `${layout}-${prop}`)
    .join(" ");
