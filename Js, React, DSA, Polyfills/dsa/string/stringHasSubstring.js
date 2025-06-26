// CHECK IF A STRING CONTAINS Substring
// INPUT: mainStr = 'foo', subStr = 'oo'
// OUTPUT: true

const mainString = "foo";
const subString = "oo";
// console.log(mainString.includes(subString));
// console.log(mainString.indexOf(subString) !== -1);

const findSubStringPresent = (mainStr, subStr) => {
  if (subStr.length === 0) return true;
  if (mainStr.length < subStr.length) return false;

  for (let i = 0; i <= mainStr.length - subStr.length; i++) {
    let match = true;

    for (let j = 0; j < subStr.length; j++) {
      if (mainStr[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }

    if (match) return true; // found the substring
  }

  return false; // not found
};

console.log(findSubStringPresent("foo", "oo"));
