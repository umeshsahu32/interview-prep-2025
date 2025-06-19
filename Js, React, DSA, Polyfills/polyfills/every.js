const arr = [2, 4, 6, 8, , 10, 3];

// const res = arr.every((item) => item % 2 === 0);
// console.log(res);

Array.prototype.myEvery = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("myEvery error: undefined is not a function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const value = callbackFn(arr[i]);
      if (!value) return false;
    }
  }

  return true;
};

const res = arr.myEvery((item) => item % 2 === 0);
console.log(res);
