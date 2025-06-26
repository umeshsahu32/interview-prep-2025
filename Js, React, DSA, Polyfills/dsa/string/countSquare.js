// Given a positive integer n, find the number of perfect squares that are less than n in the sample space of perfect squares. The sample space consists of all perfect squares starting from 1 (i.e., 1, 4, 9, 16, 25, …)

// Examples :

// Input: n = 9
// Output: 2
// Explanation: 1 and 4 are the only Perfect Squares less than 9. So, the Output is 2.

// Input: n = 3
// Output: 1
// Explanation: 1 is the only Perfect Square less than 3. So, the Output is 1.

// SOLUTION 1
// const findPerfectSquare = (num) => {
//   let result = [];

//   for (let i = 1; i < num; i++) {
//     let squares = i * i;
//     if (squares < num) {
//       result.push(squares);
//     }
//   }

//   return result.length;
// };

// SOLUTION 2
const findPerfectSquare = (num) => {
  let count = 0;
  for (let i = 1; i * i < num; i++) {
    count++;
  }
};
console.log(findPerfectSquare(9));
console.log(findPerfectSquare(3));
