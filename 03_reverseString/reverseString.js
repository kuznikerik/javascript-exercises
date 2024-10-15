const reverseString = function (string) {
  const stringArray = Array.from(string);
  const reversedStringArray = stringArray.reverse();
  return reversedStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
