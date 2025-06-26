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

const arrElement = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5];

const findZeroSumPairs = (arr) => {
  const seen = new Set();
  const result = new Set();

  for (const item of arr) {
    const commonest = -item;
    if (seen.has(commonest)) {
      const pair = [Math.min(item, commonest), Math.max(item, commonest)];
      result.add(pair.toString());
    }
    seen.add(item);
  }

  const resultArr = Array.from(result).map((item) =>
    item.split(",").map(Number)
  );

  return resultArr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
};

console.log(findZeroSumPairs(arrElement));
// Output: [[-6, 6], [-1, 1]]
