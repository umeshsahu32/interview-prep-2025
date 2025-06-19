// QUESTION 6
// ? FIND THE MAXIMUM OCCURRING CHARACTER IN STRING

const str = "A wonderful serenity has taken possession of my soul";

const findMaxChar = (str) => {
  const a = str.split(" ").join("").split("");
  const map = {};

  a.forEach((element) => {
    map[element] = (map[element] || 0) + 1;
  });

  let max = 1;
  let char;
  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      char = key;
    }
  }
  return [char, max];
};

const resultMaxChar = findMaxChar(str);
console.log("result", resultMaxChar);
