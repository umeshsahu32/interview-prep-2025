// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// SOLUTION 1
const findRepeatedNumber = (inputArr) => {
  let count = {};

  for (let i = 0; i < inputArr.length; i++) {
    count[inputArr[i]] = (count[inputArr[i]] || 0) + 1;
  }

  for (let key in count) {
    if (count[key] > 1) {
      return key;
    }
  }
};

// SOLUTION 2
const findDuplicateWithSet = (arr) => {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return item;
    else seen.add(item);
  }
};
console.log("1", findRepeatedNumber([1, 3, 4, 2, 2, 2, 2, 2]));
console.log("2", findDuplicateWithSet([1, 3, 4, 2, 2, 2, 2, 2]));
