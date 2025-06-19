// QUESTION 19
// Find the Longest Word in a String

function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}

console.log(findLongestWord("word is the barged"));
