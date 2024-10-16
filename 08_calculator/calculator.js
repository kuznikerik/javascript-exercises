const add = function () {
  return Object.values(arguments).reduce((a, b) => a + b);
};

const subtract = function () {
  return Object.values(arguments).reduce((a, b) => a - b);
};

const sum = function () {
  if (!arguments[0].length) return 0;
  return arguments[0].reduce((a, b) => a + b);
};

const multiply = function () {
  if (!arguments[0].length) return 0;
  return arguments[0].reduce((a, b) => a * b);
};

const power = function () {
  return Object.values(arguments).reduce((a, b) => Math.pow(a, b));
};

const factorial = function () {
  const number = arguments[0];
  let total = 1;

  for (let i = number; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
