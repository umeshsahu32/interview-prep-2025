const arr = [1, 2, 3, 4, 5];

// const res = arr.filter((item) => item % 2 === 0);
// console.log(res);

Array.prototype.myFilter = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("myFilter error: undefined is not a function");
  }

  const newArray = [];
  let flag = 0;

  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      let value = callbackFn(this[flag], flag, this);
      value && newArray.push(this[flag]);
    }
    flag++;
  }
  return newArray;
};

const result = arr.myFilter((item) => item % 2 === 0);
console.log(result);
