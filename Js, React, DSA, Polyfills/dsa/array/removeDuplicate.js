// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

const removeDuplicate = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  let k = i + 1;
  for (let x = k; x < arr.length; x++) {
    arr[x] = "_";
  }

  return [k, arr];
};

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicate([1, 1, 2]));
