// Question 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1
// Input: n = 3  ----->>>>>  Output: 2

const findFibonacciNumber = (num) => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
};

console.log(findFibonacciNumber(10));
