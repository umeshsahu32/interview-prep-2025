// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Brute Force Approach
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // O(n)

  uniqueArr.sort((a, b) => {
    // O(n log n)
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

// console.log(secondLargest([10, 5, 10]));
// Time Complexity -> O(n log n);

// Optimized Approach
// [12, 35, 1, 10, 34, 1]
// secondLargest = 34
// largest = 35

const removeDuplicateArr = (arr) => {
  const newArr = new Set();
  for (let letter of arr) {
    if (!newArr.has(letter)) newArr.add(letter);
  }

  return Array.from(newArr);
};

const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};

const kthLargestElement = (arr, k) => {
  const distinctArr = removeDuplicateArr(arr);
  if (k > distinctArr.length || k <= 0) return null;
  const sortedArray = sortArray(distinctArr);
  return sortedArray[sortedArray.length - k];
};

console.log(kthLargestElement([12, 35, 1, 10, 34, 1], 2));
