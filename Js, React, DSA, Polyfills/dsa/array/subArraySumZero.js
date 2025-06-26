// Given an array of integers, arr[]. Find if there is a subarray (of size at least one) with 0 sum. Return true/false depending upon whether there is a subarray present with 0-sum or not.
// Examples 1:
// Input: arr[] = [4, 2, -3, 1, 6]
// Output: true
// Explanation: 2, -3, 1 is the subarray with a sum of 0.

// Examples 2:
// Input: arr = [4, 2, 0, 1, 6]
// Output: true
// Explanation: 0 is one of the element in the array so there exist a subarray with sum 0.

// Examples 3:
// Input: arr = [1, 2, -1]
// Output: false

const hasZeroSumSubarray = (arr) => {
  const prefixSums = new Set();

  let sum = 0;

  for (const num of arr) {
    sum = sum + num;

    if (sum === 0 || prefixSums.has(sum) || num === 0) {
      return true;
    }

    prefixSums.add(sum);
  }

  return false;
};

console.log(hasZeroSumSubarray([4, 2, -3, 1, 6])); // true
console.log(hasZeroSumSubarray([4, 2, 0, 1, 6])); // true
console.log(hasZeroSumSubarray([1, 2, -1])); // false
