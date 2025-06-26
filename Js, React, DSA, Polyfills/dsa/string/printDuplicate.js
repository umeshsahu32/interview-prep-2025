// Given a string s, the task is to identify all characters that appear more than once and print each as a list containing the character and its count.

// Input: s = "geeksforgeeks"
// Output: ['e', 4], ['g', 2], ['k', 2], ['s', 2]
// Explanation: Characters e, g, k, and s appear more than once. Their counts are shown in order of first occurrence.

// Input: s = "programming"
// Output: ['r', 2], ['g', 2], ['m', 2]
// Explanation: Only r, g, and m are duplicates. Output lists them with their counts.

// Input: s = "mississippi"
// Output: ['i', 4], ['s', 4], ['p', 2]
// Explanation: Characters i, s, and p have multiple occurrences. The output reflects that with count and order preserved.

const findMultipleOccurrences = (str) => {
  if (str.length === 0) return {};

  const strObj = {};
  for (const letter of str) {
    strObj[letter] = (strObj[letter] || 0) + 1;
  }

  const result = [];
  for (let key in strObj) {
    if (strObj[key] > 1) {
      result.push([key, strObj[key]]);
    }
  }

  return result;
};

console.log(findMultipleOccurrences("geeksforgeeks"));
console.log(findMultipleOccurrences("programming"));
console.log(findMultipleOccurrences("mississippi"));
