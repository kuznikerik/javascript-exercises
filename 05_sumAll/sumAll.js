const sumAll = function (num1, num2) {
  // Check if positive interger
  if (
    num1 < 1 ||
    num2 < 1 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }

  const min = num1 < num2 ? num1 : num2;
  const max = num1 > num2 ? num1 : num2;
  let sumAll = 0;

  for (let i = min; i <= max; i++) {
    sumAll += i;
  }

  return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
