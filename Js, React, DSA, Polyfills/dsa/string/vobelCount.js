// QUESTION 8
// Write a program to get total vowel count from String ?
const getVowelCount = (inputStr) => {
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};
console.log(getVowelCount("hello how are you today programiz website?"));
