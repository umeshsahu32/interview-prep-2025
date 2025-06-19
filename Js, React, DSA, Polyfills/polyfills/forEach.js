// arr.forEach((name, index, self) => {
//   console.log(name, index, self);
// });

const arr = ["umesh", , "shivam", "tushar"];

Array.prototype.myForEach = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new TypeError("myForEach error: undefined is not a function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      callbackFn(arr[i], i, arr);
    }
  }
};

arr.myForEach((item, index, self) => {
  console.log(item, index, self);
});

// const arr = ["umesh", , "shivam"]; // index 1 is a "hole"
// 0 in arr; // true
// 1 in arr; // false  ← ❗ important
// 2 in arr; // true
