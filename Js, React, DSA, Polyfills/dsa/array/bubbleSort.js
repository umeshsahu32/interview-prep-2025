// Implement bubble sort in javascript
// write a function to sort the given array numbers in ascending order
// INPUT: [29, 10, 14, 37, 14], OUTPUT: [10, 14, 14, 29, 37]

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    console.log(`\n🔁 Pass ${i}:`);
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      console.log("Array:", arr);
      console.log(
        `Comparing arr[${j}] = ${arr[j]} and arr[${j + 1}] = ${arr[j + 1]}`
      );
      if (arr[j] > arr[j + 1]) {
        console.log(`  🔄 Swapping ${arr[j]} and ${arr[j + 1]}`);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // No swaps = already sorted
  }

  return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n^2)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)
