// Return an array showing the cumulative sum at each index of an array of integers

let arrCumulativeSum = [1, 3, 5, 7];

// METHOD 1 (BETTER PERFORMANCE)
const cumulativeSum = (arr) => {
  const result = new Array(arr.length);
  result[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result[i] = result[i - 1] + arr[i];
  }

  return result;
};

// METHOD 2
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
