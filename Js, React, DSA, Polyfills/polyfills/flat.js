const sampleData = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]];

Array.prototype.myFlat = function (depth = 1) {
  const flatten = (arr, level) => {
    let result = [];
    arr.forEach((element) => {
      if (Array.isArray(element) && level > 0) {
        result.push(...flatten(element, level - 1));
      } else {
        result.push(element);
      }
    });
    return result;
  };

  return flatten(this, depth);
};

const res = sampleData.myFlat();
console.log(res);
