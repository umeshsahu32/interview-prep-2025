// Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', verify the validity of the arrangement.
// An input string is valid if:

//          1. Open brackets must be closed by the same type of brackets.
//          2. Open brackets must be closed in the correct order.

// Examples 1:
// Input: s = "[{()}]"
// Output: true
// Explanation: All the brackets are well-formed.

// Examples 2:
// Input: s = "[()()]{}"
// Output: true
// Explanation: All the brackets are well-formed.

// Examples 3:
// Input: s = "([]"
// Output: False
// Explanation: The expression is not balanced as there is a missing ')' at the end.

const parenthesisChecker = (str) => {
  if (str.length === 0) return false;

  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const result = [];

  for (const item of str) {
    if (item === "(" || item === "[" || item === "{") {
      result.push(item);
    } else if (result.pop() !== brackets[item]) {
      return false;
    }
  }

  return result.length === 0;
};

console.log(parenthesisChecker("[{()}]"));
console.log(parenthesisChecker("[()()]{}"));
console.log(parenthesisChecker("([]"));
