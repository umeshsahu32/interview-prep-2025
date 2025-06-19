// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s.charAt(right)) && left < right) {
      charSet.delete(s.charAt(left));
      left++;
    }
    charSet.add(s.charAt(right));
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

or;

function lengthOfLongestSubstring(check) {
  var letters = check.split("");
  var max = 0;
  var result = new Map();
  var start = 0;

  for (var i = 0; i < letters.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
    } else {
      i = result.get(letters[i]);
      result.clear();
    }

    if (max < result.size) {
      max = result.size;
    }
  }
  return max;
}

// Example:
console.log(lengthOfLongestSubstring("word")); // 3
