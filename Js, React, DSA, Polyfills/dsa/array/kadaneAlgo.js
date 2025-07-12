// Given an integer array arr[]. You need to find the maximum sum of a subarray.

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray {-2} has the largest sum -2.

// kane's Algorithm

const maxSubArray = (arr) => {
  if (arr.length === 0) return 0;

  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([2, 3, -8, 7, -1, 2, 3]));
console.log(maxSubArray([-2, -4]));
console.log(maxSubArray([5, 4, 1, 7, 8]));
