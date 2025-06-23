// Implement selection sort in javascript
// write a function to sort the given array numbers in ascending order
// INPUT: [29, 10, 14, 37, 14], OUTPUT: [10, 14, 14, 29, 37]

const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    console.log(`\n🔁  Start from index ${i}`);
    console.log("array==>", arr, "Min Index", minIndex);
    for (let j = i + 1; j < n; j++) {
      console.log(
        `  🔍 Comparing arr[${j}] = ${arr[j]} with current min arr[${minIndex}] = ${arr[minIndex]}`
      );
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        console.log(`  👉 New minimum found at index ${j}: ${arr[j]}`);
      }
    }

    if (minIndex !== i) {
      console.log(
        `  🔄 Swapping arr[${i}] = ${arr[i]} with arr[${minIndex}] = ${arr[minIndex]}`
      );
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      console.log("  → Array after swap:", [...arr]);
    } else {
      console.log("  ✅ No swap needed in this pass");
    }

    console.log("Array after pass", i + 1, ":", [...arr]);
  }

  console.log("\n✅ Final sorted array:", arr);
  return arr;
};

console.log(selectionSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n^2)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)
