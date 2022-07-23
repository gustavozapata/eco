// find item in array
export const findInArray = () => {
  const arr = [1, 2, 3, 4, 5];
  const result = arr.find((item) => item === 3);
  console.log(result);
};

// if array contains item
export const contains = () => {
  return Array.prototype.includes;
};

// find object property in array
export const findObjectProperty = (
  array,
  property,
  value,
  returnProperty = null
) => {
  return (array, property, value) => {
    return array.find((item) => item[property] === value);
  };
};
