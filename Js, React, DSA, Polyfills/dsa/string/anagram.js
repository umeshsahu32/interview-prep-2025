// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let letter of str1) {
    obj1[letter] = (obj1[letter] || 0) + 1;
  }

  for (let letter of str2) {
    obj2[letter] = (obj2[letter] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "gramana"));
