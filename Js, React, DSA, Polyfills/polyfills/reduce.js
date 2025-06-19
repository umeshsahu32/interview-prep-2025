const arr = [2, 3, 4, 5, 1];

// const addition1 = arr.reduce((acc, current) => acc + current, 0);
// console.log("addition1", addition1); // 15

// const addition2 = arr.reduce((acc, current) => acc + current);
// console.log("addition2", addition2); // 15

// ! DECLAIMER
// If you don’t provide an initial value:
// First element becomes the initial accumulator.
// Reduction starts from index 1.

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("myReduce error: undefined is not a function");
  }

  if (this === null) {
    throw new TypeError("invalid data");
  }

  if (!this.length && !initialValue) {
    throw new Error("Reduce of empty array with no initial value");
  }

  const initialVal = initialValue ? initialValue : this[0]; // CHECK DECLAIMER
  const startIndex = initialValue ? 0 : 1; // CHECK DECLAIMER

  let accumulator = initialVal;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

const addition1 = arr.myReduce((acc, current) => acc + current, 0);
console.log("addition1", addition1); // 15

const addition2 = arr.myReduce((acc, current) => acc + current);
console.log("addition2", addition2); // 15
