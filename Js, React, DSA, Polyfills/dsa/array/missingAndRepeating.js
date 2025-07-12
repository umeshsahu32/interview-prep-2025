// Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

// Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

// Examples:

// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and smallest positive missing number is 1.

// Input: arr[] = [1, 3, 3]
// Output: [3, 2]
// Explanation: Repeating number is 3 and smallest positive missing number is 2.

// Input: arr[] = [4, 3, 6, 2, 1, 1]
// Output: [1, 5]
// Explanation: Repeating number is 1 and the missing number is 5.

const findDuplicate = (arr) => {
  let set = new Set();
  for (let item of arr) {
    if (set.has(item)) return item;
    set.add(item);
  }
};

const findMissingNumber = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) return i;
  }
};

const findMissingAndRepeatingNumber = (arr) => {
  if (arr.length === 0) return 0;
  const duplicateNum = findDuplicate(arr);
  const missingNumber = findMissingNumber(arr);
  return { duplicateNum, missingNumber };
};

console.log(findMissingAndRepeatingNumber([2, 2]));
console.log(findMissingAndRepeatingNumber([1, 3, 3]));
console.log(findMissingAndRepeatingNumber([4, 3, 6, 2, 1, 1]));
