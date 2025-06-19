// Given an array arr, rotate the array by one position in clockwise direction.

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
function rotateArray(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size); // [5, 6, 7]
  nums.unshift(...rotated);

  return nums;
}

// Time Complexity - O(n)
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Optimized Approach
function rotateArrayOptimized(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimized([-1, -100, 3, 99], 2));
///////////////////////////////////
function RightRotate(a, n, k) {
  k = k % n;
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i < k) {
      arr.push(a[n + i - k]);
    } else {
      arr.push(a[i - k]);
    }
  }
  return arr;
}

// Driver code
let arrRotate = [1, 2, 3, 4, 5, 7, 9];
let lengthOfArrRotate = arr.length;
let steps = 2;

console.log(RightRotate(arrRotate, lengthOfArrRotate, steps));
//////////////////////////////////////////////////
let rotate = function (arr, numberOfShifts) {
  let deletedArray = arr.splice(arr.length - numberOfShifts);
  for (let i = 0; i < deletedArray.length; i++) {
    arr.splice(i, 0, deletedArray[i]);
  }
  return arr;
};

// Driver code
let arrRotate2 = [1, 2, 3, 4, 5, 7, 9];

let steps2 = 2;

console.log(rotate(arrRotate2, steps2));
