// QUESTION 14
// Find the missing number in a given integer array of 1 to 10?

let arrMissingNum = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const findMissingNum = (arr, range) => {
  let arr2 = [];
  for (let i = 1; i <= range; i++) {
    if (!arr.includes(i)) {
      arr2.push(i);
    }
  }
  return arr2;
};
console.log(findMissingNum(arrMissingNum, 10)); // Returns 9, the missing number
