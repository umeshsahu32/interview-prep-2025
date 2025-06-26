// Find the difference of diagonal sum of the given array

const arrDiagonal = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

//left to right [1+5+9]=15
//right to left [3+5+9]=17

//Output=> |15-17| = 2

const diagonalDifference = (arr) => {
  let d1 = 0,
    d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    d1 = d1 + arr[i][i];
    d2 = d2 + arr[i][arr.length - i - 1];
  }

  return Math.abs(d1 - d2);
};

console.log(diagonalDifference(arrDiagonal));
