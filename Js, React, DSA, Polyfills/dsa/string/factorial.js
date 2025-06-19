// QUESTION 9
// Write a program to prints factorial of any number ?

const getFactorial = (inputNum) => {
  let result = 1;
  for (let i = 1; i <= inputNum; i++) {
    result *= i;
  }
  return result;
};
console.log(getFactorial(5));

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(15));
