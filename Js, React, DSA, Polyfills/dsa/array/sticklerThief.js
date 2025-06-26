// Stickler the thief wants to loot money from the houses arranged in a line. He cannot loot two consecutive houses and aims to maximize his total loot.
// Given an array, arr[] where arr[i] represents the amount of money in the i-th house.
// Determine the maximum amount he can loot.

// Examples:

// Input: arr[] = [6, 5, 5, 7, 4]
// Output: 15
// Explanation: Maximum amount he can get by looting 1st, 3rd and 5th house. Which is 6 + 5 + 4 = 15.

// Input: arr[] = [1, 5, 3]
// Output: 5
// Explanation: Loot only 2nd house and get maximum amount of 5.

// Input: arr[] = [4, 4, 4, 4]
// Output: 8
// Explanation: The optimal choice is to loot every alternate house. Looting the 1st and 3rd houses, or the 2nd and 4th, both give a maximum total of 4 + 4 = 8.

const maxLoot = (arr) => {
  const n = arr.length;

  if (n === 0) return 0;
  if (n === 1) return arr[0];

  const dp = new Array(n).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }

  return dp[n - 1];
};

console.log(maxLoot([6, 5, 5, 7, 4])); //15
console.log(maxLoot([1, 5, 3])); //5
console.log(maxLoot([4, 4, 4, 4])); //8

console.log(maxLoot([6, 5, 5, 7, 4])); //15
// console.log(maxLoot([1, 5, 3])); //5
// console.log(maxLoot([4, 4, 4, 4])); //8
