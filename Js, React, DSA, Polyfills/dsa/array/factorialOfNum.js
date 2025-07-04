// Given an integer n, find its factorial. Return a list of integers denoting the digits that make up the factorial of n.
// Input: n = 5
// Output: [1, 2, 0]
// Explanation: 5! = 1*2*3*4*5 = 120

// Input: n = 10
// Output: [3, 6, 2, 8, 8, 0, 0]
// Explanation: 10! = 1*2*3*4*5*6*7*8*9*10 = 3628800

const getFactorialOfNum = (num) => {
  if (num === 1) return 1;
  return num * getFactorialOfNum(num - 1);
};

const getIntegerArr = (num) => {
  const factorial = getFactorialOfNum(num);
  return factorial.toString().split("").map(Number);
};

console.log(getIntegerArr(6));
