// 1.  Upper Pyramid
// 2.  Reverse Pyramid
// 3.  Right Aligned Pyramid
// 4.  Left Aligned Pyramid
// 5.  Left Aligned Number Pyramid
// 6.  Right Aligned Number Pyramid
// 7.  Reverse Left Aligned Number Pyramid
// 8.  Reverse Right Aligned Number Pyramid
// 9.  Reverse Countdown Pyramid
// 10. Growing Reverse Pyramid

// ! Upper Pyramid (4)

//      *
//     ***
//    *****
//   *******

const upperPyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let space = " ".repeat(rows - i);
    let star = "*".repeat(2 * i - 1);
    console.log(space + star);
  }
};

upperPyramid(4);

// ! Reverse Pyramid (4)

//  #######
//   #####
//    ###
//     #

const reversePyramid = (rows) => {
  for (let i = rows; i > 0; i--) {
    let space = " ".repeat(rows - i);
    let star = "*".repeat(2 * i - 1);
    console.log(space + star);
  }
};

reversePyramid(4);

// ! Right Aligned Pyramid
//     #
//    ##
//   ###
//  ####
// #####

const rightAlignedPyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let space = " ".repeat(rows - i);
    let hashes = "#".repeat(i);
    console.log(space + hashes);
  }
};

rightAlignedPyramid(4);

// ! Left Aligned Pyramid
// #
// ##
// ###
// ####
// #####

const leftAlignedPyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let hashes = "#".repeat(i);
    console.log(hashes);
  }
};

leftAlignedPyramid(4);

// ! Left Aligned Number Pyramid
// 1
// 12
// 123
// 1234
// 12345

const leftAlignedNumberPyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let lines = "";
    for (let j = 1; j <= i; j++) {
      lines += j;
    }
    console.log(lines);
  }
};

leftAlignedNumberPyramid(5);

// ! Right Aligned Number Pyramid
//     1
//    12
//   123
//  1234
// 12345

const rightAlignedNumberPyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let numbers = "";
    let space = " ".repeat(rows - i);

    for (let j = 1; j <= i; j++) {
      numbers += j;
    }
    console.log(space + numbers);
  }
};

rightAlignedNumberPyramid(5);

// ! Reverse Left Aligned Number Pyramid
// 12345
// 1234
// 123
// 12
// 1

const reverseLeftAlignedNumberPyramid = (rows) => {
  for (let i = rows; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
};

reverseLeftAlignedNumberPyramid(5);

// ! Reverse Right Aligned Number Pyramid
// 12345
//  1234
//   123
//    12
//     1

const reverseRightAlignedNumberPyramid = (rows) => {
  for (let i = rows; i >= 1; i--) {
    let line = "";
    let space = " ".repeat(rows - i);
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(space + line);
  }
};

reverseRightAlignedNumberPyramid(5);

// ! Reverse Countdown Triangle
// 54321
// 5432
// 543
// 54
// 5

const reverseCountdownTriangle = (rows) => {
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = rows; j > i; j--) {
      line += j;
    }
    console.log(line);
  }
};

reverseCountdownTriangle(5);

// ! Growing Reverse Triangle
// 5
// 54
// 543
// 5432
// 54321

const growingReverseTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = rows; j >= rows + 1 - i; j--) {
      line += j;
    }
    console.log(line);
  }
};

growingReverseTriangle(5);
