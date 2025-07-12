// Given an integer array arr, rotate the array to the right by k steps,
// where k is non - negative.

// Input: arr = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: arr = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

const rotate = (arr, k) => {
  const n = arr.length;
  k = k % n; // handle k > n

  // Helper function to reverse a subarray in-place
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  // Step 1: reverse the entire array
  reverse(arr, 0, n - 1);

  // Step 2: reverse the first k elements
  reverse(arr, 0, k - 1);

  // Step 3: reverse the remaining elements
  reverse(arr, k, n - 1);

  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]
