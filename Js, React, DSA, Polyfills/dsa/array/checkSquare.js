// //? CHECK IF SQUARE OF ELEMENT FROM ARRAY1 IS PRESENT IN SQUARE 2
//! INPUT=> [1,2,3,6], [4, 36, 9, 1]
//! OUTPUT=> TRUE
const array1 = [1, 2, 3, 2];
const array2 = [4, 4, 9, 1];

//TODO METHOD 1
const checkSquare = (arr1, arr2) => {
  const map1 = {};
  const map2 = {};

  for (item1 of arr1) {
    map1[item1] = (map1[item1] || 0) + 1;
  }

  for (item2 of arr2) {
    map2[item2] = (map2[item2] || 0) + 1;
  }

  for (const key in obj1) {
    const square = key * key;
    if (!obj2[square]) return false;
    if (obj2[square] !== obj1[key]) return false;
  }
  return true;
};

const result = checkSquare(array1, array2);
console.log("result:", result);
