const a1 = [1, 2, 3];
const a2 = [4, , 5];

// console.log(a1.concat(a2));

Array.prototype.myConcat = function (...args) {
  const result = [];

  const addToResult = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        result.push(arr[i]);
      } else {
        // preserve hole
        result.length++;
      }
    }
  };

  addToResult(this);

  for (const arg of args) {
    console.log("args", arg);
    if (Array.isArray(arg)) {
      addToResult(arg);
    } else {
      result.push(arg);
    }
  }

  return result;
};

console.log(a1.myConcat(a2, [3, 4], "namaste"));
