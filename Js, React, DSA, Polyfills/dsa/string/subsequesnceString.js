// Given a string, we have to find out all its subsequences of it. A String is said to be a subsequence of another String, if it can be obtained by deleting 0 or more character without changing its order.

// Examples:

// Input : ab
// Output : "", "a", "b", "ab"

// Input : abc
// Output : "", "a", "b", "c", "ab", "ac", "bc", "abc"

const findSubsequences = (str) => {
  if (str.length === 0) return false;

  let result = [""];

  for (const letter of str) {
    const newWord = [];

    for (const char of result) {
      const newLetter = char + letter;
      newWord.push(newLetter);
    }

    result = result.concat(newWord);
  }

  return result;
};

console.log(findSubsequences("ab"));
console.log(findSubsequences("abc"));
