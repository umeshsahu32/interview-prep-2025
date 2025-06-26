// Find the Longest Word in a String

const findLongestWord = (str) => {
  if (str.length === 0) return "";
  str = str.split(" ");

  let result = { count: 0, word: "" };
  for (let word of str) {
    if (word.length > result.count) {
      result.count = word.length;
      result.word = word;
    }
  }

  return result;
};

console.log(findLongestWord("word is the barged"));
