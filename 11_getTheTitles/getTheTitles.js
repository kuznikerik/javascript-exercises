const getTheTitles = function (obj) {
  const arrayOfTitles = Array.from(
    obj.map((thing) => {
      return thing.title;
    })
  );

  return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
