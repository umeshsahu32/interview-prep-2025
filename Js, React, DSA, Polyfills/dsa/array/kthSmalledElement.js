// Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

// Follow up: Don't solve it using the inbuilt sort function.

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.

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
  return sortedArray[k - 1];
};

console.log(kthLargestElement([12, 35, 1, 10, 34, 1], 2));
