// QUESTION 10
// Write a program for check number is prime or not ?
// Prime Numbers: Those numbers which is divisible by self and 1 only.
const isPrime = (number) => {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};
console.log(isPrime(11));
console.log(isPrime(17));
console.log(isPrime(18));
