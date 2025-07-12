// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// You need to solve this problem without utilizing the built-in sort function.

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s 1s and 2s are segregated into ascending order.

const sortArray = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
};

console.log(sortArray([0, 1, 2, 0, 1, 2]));
