// Write a program to get total vowel count from String ?

const findVowels = (str) => {
  if (str.length === 0) return false;

  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (const letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};

console.log(findVowels("hello how are you today program website?"));
console.log(findVowels("hello"));
