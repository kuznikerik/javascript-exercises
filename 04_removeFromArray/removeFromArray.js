const removeFromArray = function () {
  if (!Array.isArray(arguments[0])) return;
  const valuesToRemove = Array.from(arguments).slice(1);
  return arguments[0].filter((element) => !valuesToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
