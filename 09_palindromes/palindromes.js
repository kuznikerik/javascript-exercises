const palindromes = function (string) {
  const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const array = Array.from(cleanString);
  return cleanString === array.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
