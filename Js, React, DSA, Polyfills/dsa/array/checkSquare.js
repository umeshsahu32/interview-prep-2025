// //? CHECK IF SQUARE OF ELEMENT FROM ARRAY1 IS PRESENT IN SQUARE 2
//! INPUT=> [1,2,3,6], [4, 36, 9, 1]
//! OUTPUT=> TRUE
const array1 = [1, 2, 3, 2];
const array2 = [4, 4, 9, 1];

// TODO METHOD 1
// const checkSquare = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] == arr2[j]) {
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return isSquare;
// };

//TODO METHOD 2
const checkSquare = (arr1, arr2) => {
  const map1 = {};
  const map2 = {};

  for (item1 of arr1) {
    map1[item1] = (map1[item1] || 0) + 1;
  }

  for (item2 of arr2) {
    map2[item2] = (map2[item2] || 0) + 1;
  }
  console.log(map1);
  console.log(map2);
  //   for (let key in map1) {
  //     if (!map2[key * key]) {
  //       return false;
  //     }

  //     if (map1[key] !== map2[key * key]) {
  //       return false;
  //     }
  //   }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const result = checkSquare(array1, array2);
console.log("result:", result);
