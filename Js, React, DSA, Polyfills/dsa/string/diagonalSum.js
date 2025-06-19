//QUESTION 7

// Find the difference of diagonal sum of the given array

const arrDiagonal = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

//left to right [1+5+9]=15
//right to left [3+5+9]=17

//Output=> |15-17| = 2

const DiagonalSum = (arr, num) => {
  let d1 = 0,
    d2 = 0;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i == j) {
        d1 += arr[i][j];
      }
      if (i == num - j - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
};

const resultArrDiagonal = DiagonalSum(arrDiagonal, 3);

console.log("result", resultArrDiagonal);
