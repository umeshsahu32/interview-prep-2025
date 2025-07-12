// Given an array, arr[] and an integer x, return true if there exists a pair of elements in the array whose absolute difference is x, otherwise, return false.

// Examples:

// Input: arr[] = [5, 20, 3, 2, 5, 80], x = 78
// Output: true
// Explanation: Pair (2, 80) have an absolute difference of 78.

// Input: arr[] = [90, 70, 20, 80, 50], x = 45
// Output: false
// Explanation: There is no pair with absolute difference of 45.

// Input: arr[] = [1], x = 1
// Output: false

const findPairDiff = (arr, element) => {
  if (arr.length <= 1) return false;

  let seen = new Set();
  for (let num of arr) {
    if (seen.has(num + element) || seen.has(num - element)) {
      return true;
    }
    seen.add(num);
  }

  return false;
};
console.log(findPairDiff([5, 20, 3, 2, 5, 80], 78));
console.log(findPairDiff([90, 70, 20, 80, 50], 45));
console.log(findPairDiff([1], 1));
