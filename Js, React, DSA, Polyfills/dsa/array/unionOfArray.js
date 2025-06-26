// Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays.

// The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.

// Note: Elements of a[] and b[] are not necessarily distinct.

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3]
// Output: 5
// Explanation: Union set of both the arrays will be 1, 2, 3, 4 and 5. So count is 5.

const findUnionCount = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];

  const obj1 = {};
  for (const item of newArray) {
    obj1[item] = (obj1[item] || 0) + 1;
  }
  return Object.keys(obj1).length;
};

console.log(findUnionCount([1, 2, 3, 4, 5], [1, 2, 3]));
