const arr = [2, 4, 8, , 10, 6];

// const res = arr.some((item) => item % 3 === 0);
// console.log(res);

Array.prototype.mySome = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new Error("mySome error: undefined is not function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const value = callbackFn(arr[i]);
      if (value) return true;
    }
  }

  return false;
};

const res = arr.mySome((item) => item % 3 === 0);
console.log(res);
