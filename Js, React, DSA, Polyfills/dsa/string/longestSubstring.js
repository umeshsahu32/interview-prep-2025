// Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let maxLength = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    console.log(`\nRight index ${right}, char: ${rightChar}`);

    while (charSet.has(rightChar)) {
      console.log(
        `  Duplicate found: ${rightChar}. Removing ${s[left]} at left index ${left}`
      );
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(rightChar);
    console.log(
      `  Window: ${s.slice(left, right + 1)}, Set: [${[...charSet].join(", ")}]`
    );
    maxLength = Math.max(maxLength, right - left + 1);
    console.log(`  Current maxLength: ${maxLength}`);
  }

  return maxLength;
};

lengthOfLongestSubstring("abcabcbb");

// Example:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("aab")); // 2
