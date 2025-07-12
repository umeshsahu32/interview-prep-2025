// Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

// EXample 1:
// Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
// Output: 6
// Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.

// EXample 2:
// Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
// Output: 4
// Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.

// EXample 3:
// Input: arr[] = [15, 13, 12, 14, 11, 10, 9]
// Output: 7
// Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7.

const longestConsecutiveSubsequence = (arr) => {
  const set = new Set(arr);
  let maxLength = 0;

  for (let num of arr) {
    // Only start counting if it's the beginning of a sequence
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      // Count consecutive numbers
      while (set.has(currentNum + 1)) {
        currentNum += 1;
        count += 1;
      }

      maxLength = Math.max(maxLength, count);
    }
  }

  return maxLength;
};

console.log(longestConsecutiveSubsequence([2, 6, 1, 9, 4, 5, 3])); // 6
console.log(longestConsecutiveSubsequence([1, 9, 3, 10, 4, 20, 2])); // 4
console.log(longestConsecutiveSubsequence([15, 13, 12, 14, 11, 10, 9])); // 7
