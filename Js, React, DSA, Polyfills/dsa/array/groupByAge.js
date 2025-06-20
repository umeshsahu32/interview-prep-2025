// We have group of people in the form of array and you have to group people basis upon age ?

let peopleArr = [
  { name: "A", age: 10 },
  { name: "B", age: 17 },
  { name: "C", age: 14 },
  { name: "D", age: 10 },
  { name: "E", age: 10 },
  { name: "F", age: 14 },
];

const groupPeopleByAge = (arr) => {
  const ageObj = {};

  for (const people of arr) {
    const { name, age } = people;
    if (ageObj[age]) {
      ageObj[age].push(name);
    } else {
      ageObj[age] = [name];
    }
  }

  return ageObj;
};

console.log(groupPeopleByAge(peopleArr));
