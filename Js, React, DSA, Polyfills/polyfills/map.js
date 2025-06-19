const arr = [2, 3, , 5, 6];

// const result = arr.map((item, index, self) => {
//   console.log(item, index, self);
//   return item ** 2;
// });

// console.log(result);

Array.prototype.myMap = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("myMap error: undefined is not a function");
  }
  const result = new Array(this.length);
  let flag = 0;
  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      const value = this[flag];
      const newValue = callbackFn(value, flag, this);
      result[flag] = newValue;
    }

    flag++;
  }
  return result;
};

const result = arr.myMap((item, i, self) => {
  return item ** 3;
});

console.log(result);
