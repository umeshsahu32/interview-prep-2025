// Write a program to find duplicate numbers in an integer array ?

const findDuplicateEle = (inputArr) => {
  let count = {};

  for (let i = 0; i < inputArr.length; i++) {
    count[inputArr[i]] = (count[inputArr[i]] || 0) + 1;
  }

  let duplicateInt = [];

  for (let key in count) {
    if (count[key] > 1) {
      duplicateInt.push(Number(key));
    }
  }
  return duplicateInt;
};
console.log(findDuplicateEle([1, 2, 3, 5, 3, 1, 9]));

// QUESTION 12
// How do you remove duplicates from an integer array ?

// ! METHOD 1 USING IN BUILT FUNCTION
// const uniqueElement = [...new Set(arrElement)];
// const result = uniqueElement.length;
// console.log("result:", result)

const findUnique = (arr) => {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }

  return Object.keys(count);
};
