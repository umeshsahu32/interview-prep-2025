// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const mergeIntervals = (intervals) => {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  // Step 2: Merge overlapping intervals
  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    const last = result[result.length - 1];

    if (currStart <= last[1]) {
      // Overlapping, so merge
      last[1] = Math.max(last[1], currEnd);
    } else {
      // No overlap, add to result
      result.push([currStart, currEnd]);
    }
  }

  return result;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  mergeIntervals([
    [5, 10],
    [1, 3],
    [2, 6],
  ])
);
