const convertToCelsius = function (tempInF) {
  // x °F ≘ (x − 32) × ⁠5 / 9) °C
  const tempInC = (tempInF - 32) * (5 / 9);
  return Math.round(tempInC * 10) / 10;
};

const convertToFahrenheit = function (tempInC) {
  // x °C ≘ (x × ⁠9 / 5 + 32) °F
  const tempInF = tempInC * (9 / 5) + 32;
  return Math.round(tempInF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
