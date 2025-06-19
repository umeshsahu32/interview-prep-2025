const company = [
  { id: 1, company: "Amazon" },
  { id: 2, company: "Facebook" },
  { id: 3, company: "Google" },
  { id: 4, company: "Tesla" },
];

// const res = company.find((item) => item.id === 6);
// console.log(res);

Array.prototype.myFind = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    throw new Error("myFind error: undefined is not a function");
  }

  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const val = callbackFn(arr[i], i, arr);
      if (val) return arr[i];
    }
  }

  return undefined;
};

const res = company.myFind((item) => item.id === 1);
console.log(res);
