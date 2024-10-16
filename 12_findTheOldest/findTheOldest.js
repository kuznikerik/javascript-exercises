const getAge = (birthYear, deathYear) => {
  const currentYear = new Date().getFullYear();
  return (deathYear || currentYear) - birthYear;
};

const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const currentPersonAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    const oldestPersonAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );

    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
  });
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
