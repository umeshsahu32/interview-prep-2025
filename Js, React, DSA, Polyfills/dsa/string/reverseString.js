// Write a function that reverses a string.

// Example:

// Input:  str = 'hello'
// OUTPUT: str = 'olleh'

const reverseString = (str) => {
  if (str.length === 0) return false;

  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
};

console.log(reverseString("hello"));
