// Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let maxLength = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    // Shrink window until there's no duplicate
    while (charSet.has(rightChar)) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(rightChar);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Example:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("aab")); // 2
