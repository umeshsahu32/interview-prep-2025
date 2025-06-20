// find index of a given integer from a given sorted array. if element not found return -1 (using linear search)

// INPUT: arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]; element: 23
// OUTPUT = 5

const linearSearch = (arr, element) => {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) return i;
  }

  return -1;
};

console.log(linearSearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 100));
