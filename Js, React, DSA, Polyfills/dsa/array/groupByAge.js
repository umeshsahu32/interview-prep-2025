// QUESTION 13
// We have group of people in the form of array and you have to group people basis upon age ?

let peopleArr = [
  { name: "A", age: 10 },
  { name: "B", age: 17 },
  { name: "C", age: 14 },
  { name: "D", age: 10 },
];

let resultObj = {};
for (let i = 0; i < peopleArr.length; i++) {
  if (resultObj[peopleArr[i].age]) {
    resultObj[peopleArr[i].age].push(peopleArr[i].name);
  } else {
    resultObj[peopleArr[i].age] = [peopleArr[i].name];
  }
}
console.log(resultObj);
