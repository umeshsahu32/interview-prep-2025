// Write a program for check number is prime or not ?
// Prime Numbers: Those numbers which is divisible by self and 1 only.
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(18));
