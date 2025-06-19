// Upper Pyramid (4)
//      *
//     ***
//    *****
//   *******

const upperPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
  }
};

///
// Reverse Pyramid (4)
//  #######
//   #####
//    ###
//     #

const ReversePyramid1 = (n) => {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 2 * n - 1; j >= 2 * i + 1; j--) {
      result += "#";
    }
    console.log(" ".repeat(i) + result + " ".repeat(i));
  }
};

or;

const ReversePyramid2 = (n) => {
  for (let i = n; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
  }
};

ReversePyramid1(4);
ReversePyramid2(4);

// // 12345
// 1234
// 123
// 12
// 1

const staircase1 = (n) => {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 1; j <= n - i; j++) {
      result += j;
    }
    console.log(result);
  }
};

staircase1(5);

//
// 1
// 12
// 123
// 1234
// 12345

const staircase2 = (n) => {
  var num = "";
  var size = n;
  for (var i = 1; i <= size; i++) {
    num = num + i;
    console.log(num);
  }
};

staircase2(5);

//
// 54321
// 5432
// 543
// 54
// 5

const staircase3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = n; j >= i; j--) {
      result += j;
    }
    console.log(result);
  }
};

staircase3(5);

// 5
// 54
// 543
// 5432
// 54321

const staircase4 = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i + 1; j++) {}
    result += n - i;
    console.log(result);
  }
};

staircase4(5);
//
//     #
//    ##
//   ###
//  ####
// #####

const staircase5_1 = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i + 1; j++) {}
    result += "#";
    console.log(" ".repeat(n - i) + result);
  }
};

staircase1(5);

const staircase5_2 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
};

staircase5_1(5);
staircase5_2(5);

//// #
// ##
// ###
// ####
// #####

const staircase6 = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i + 1; j++) {}
    result += "#";
    console.log(result);
  }
};

staircase6(5);
