// Write a program to prints factorial of any number ?

const findFactorial = (num) => {
  if (num === 1) return 1;
  return num * findFactorial(num - 1);
};

console.log(findFactorial(5));
