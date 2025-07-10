// You are given a string s. Your task is to determine if the string is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.

// Input: s = "abba"
// Output: true
// Explanation: "abba" reads the same forwards and backwards, so it is a palindrome.

// Input: s = "abc"
// Output: false
// Explanation: "abc" does not read the same forwards and backwards, so it is not a palindrome.

const isStringPalindrome = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr === str;
};

console.log(isStringPalindrome("abba"));
console.log(isStringPalindrome("naman"));
console.log(isStringPalindrome("abc"));
