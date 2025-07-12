// Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.

// Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1
// Explanation: Since, 1 is present more than 7/2 times, so it is the majority element.

// Input: arr[] = [7]
// Output: 7
// Explanation: Since, 7 is single element and present more than 1/2 times, so it is the majority element.

// Input: arr[] = [2, 13]
// Output: -1
// Explanation: Since, no element is present more than 2/2 times, so there is no majority element.

const findMajorityElement = (arr) => {
  const minSize = arr.length / 2;
  if (arr.length < minSize) return -1;
  const obj = {};
  for (let item of arr) {
    obj[item] = (obj[item] || 0) + 1;
  }

  let result = [];
  for (let key in obj) {
    if (obj[key] > minSize) result.push(key);
  }

  return result.length === 0 ? -1 : result.join("");
};

console.log(findMajorityElement([1, 1, 2, 1, 3, 5, 1]));
console.log(findMajorityElement([7]));
console.log(findMajorityElement([2, 13]));
