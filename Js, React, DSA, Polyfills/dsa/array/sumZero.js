// Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

// Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

// Examples:
// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct pair are [-1,1].

// Example 2:
// Input: arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
// Output: [[-6, 6],[-1, 1]]
// Explanation: The distinct pairs are [-1, 1] and [-6, 6].

const arrElement = [-5, -4, -3, -2, 0, 2, 4, 6, 7, 8];
// ! METHOD 1
// const findSumZeroPair = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };
// ! METHOD 2
const findSumZeroPair = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

const resultFindSumZero = findSumZeroPair(arrElement);
console.log("result", resultFindSumZero);
