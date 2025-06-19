// QUESTION 16
// Return an array showing the cumulative sum at each index of an array of integers

let arrCumulativeSum = [1, 3, 5, 7];

const cumulativeSum = (list) => {
  let result = [list[0]];

  for (let i = 1; i < list.length; i++) {
    result.push(list[i] + result[i - 1]);
  }

  return result;
};

const arrCumulativeSumFn = (arr) => {
  let arr2 = [];

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    arr2.push(sum);
  }

  return arr2;
};

console.log(cumulativeSum(arrCumulativeSum)); // Returns [1, 4, 9, 16]
