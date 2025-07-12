// Given an array containing both positive and negative numbers in random order. The task is to rearrange the array elements so that all negative numbers appear before all positive numbers.
// Note:

// Given array does not contain any zeroes.
// Order of resultant array does not matter.

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

const reArrangeNegatives = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
};
console.log(reArrangeNegatives([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
