// Given a sorted array arr with possibly some duplicates, the task is to find the first and last occurrences of an element x in the given array.
// Note: If the number x is not found in the array then return both the indices as -1.

// Examples:
// Input: arr[] = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
// Output: [2, 5]
// Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5

// Input: arr[] = [1, 3, 5, 5, 5, 5, 7, 123, 125], x = 7
// Output: [6, 6]
// Explanation: First and last occurrence of 7 is at index 6

// Input: arr[] = [1, 2, 3], x = 4
// Output: [-1, -1]
// Explanation: No occurrence of 4 in the array, so, output is [-1, -1]

const findFirstAndLastOccurrences = (arr, x) => {
  const result = [-1, -1];

  // find first occurrence
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      result[0] = mid; // save the index
      right = mid - 1; //search more in left direction
    } else if (arr[mid] < x) {
      left = mid + 1; // move to right half
    } else {
      right = mid - 1; // move to left half
    }
  }

  // find last occurrence
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      result[1] = mid;
      left = mid + 1;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

console.log(findFirstAndLastOccurrences([1, 3, 5, 5, 5, 5, 67, 123, 125], 5));
console.log(findFirstAndLastOccurrences([1, 3, 5, 5, 5, 5, 7, 123, 125], 7));
console.log(findFirstAndLastOccurrences([1, 2, 3], 4));
