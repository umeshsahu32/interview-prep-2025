// Implement insertionSort sort in javascript
// write a function to sort the given array numbers in ascending order
// INPUT: [29, 10, 14, 37, 14, 33, 8, 11], OUTPUT: [8, 10, 11, 14, 14, 29, 33, 37]

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    console.log(
      `\n🔁 Pass ${i}: Insert arr[${i}] = ${current} into the sorted part`
    );

    while (j >= 0 && arr[j] > current) {
      console.log(
        `  🔍 arr[${j}] = ${arr[j]} is greater than ${current} → shifting right`
      );
      arr[j + 1] = arr[j]; // Shift element to the right
      j--;
    }

    console.log(`  ✅ Placing ${current} at index ${j + 1}`);
    arr[j + 1] = current; // Insert current at correct position

    console.log("  → Array after pass:", [...arr]);
  }

  console.log("\n✅ Final sorted array:", arr);
  return arr;
};

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)
