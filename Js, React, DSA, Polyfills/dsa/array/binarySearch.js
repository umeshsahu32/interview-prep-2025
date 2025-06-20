// find index of a given integer from a given sorted array. if element not found return -1 (using binary search)

// INPUT: arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]; element: 23
// OUTPUT = 5

const binarySearch = (arr, element) => {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 100));
