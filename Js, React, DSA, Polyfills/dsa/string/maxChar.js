// ? FIND THE MAXIMUM OCCURRING CHARACTER IN STRING

const paragraph = "A wonderful serenity has taken possession of my soul";

const maximumOccurringChar = (str) => {
  str = str.toLowerCase().split(" ").join("").split("");
  const charCount = {};

  for (let letter of str) {
    charCount[letter] = (charCount[letter] || 0) + 1;
  }

  const word = { char: "", count: 0 };
  for (let key in charCount) {
    if (charCount[key] > word.count) {
      word.count = charCount[key];
      word.char = key;
    }
  }
  return word;
};

console.log(maximumOccurringChar(paragraph));
