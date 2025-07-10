// What is Currying?
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

// Why should currying be used?
// Following are the reasons why currying is good :

// ✅ It makes a function pure which makes it expose to less errors and side effects.

// ✅ It helps in avoiding the same variable again and again.

// ✅ It is a checking method that checks if you have all the things before you proceed.

// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

// How does currying work?
// Currying is a function that takes multiple arguments as input. It transform the function into a number of functions where every function will accept one argument.

// BLOG_LINK = https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// Question 1
const sumFn = (a) => {
  return function (b) {
    if (b) return sumFn(a + b);
    return a;
  };
};

console.log(sumFn(1)(2)(3)(4)());

// Question 2

const evaluate = (operation) => {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "minus") return a - b;
      else return "Invalid Operation";
    };
  };
};

console.log(evaluate("sum")(12)(6)); // 18
console.log(evaluate("multiply")(12)(6)); // 72
console.log(evaluate("divide")(12)(6)); // 2
console.log(evaluate("minus")(12)(6)); // 6

// Question 3
const sumOfThree = (a) => {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(sumOfThree(2)(4)(8));
