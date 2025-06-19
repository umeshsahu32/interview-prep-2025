function foo(age) {
  console.log(`${this.name} is ${age} years old`);
}

const p1 = {
  name: "Vikas",
};

const p2 = {
  name: "vishal",
};

globalThis.name = "shivam";

// foo(23);
// foo.call(p1, 34);
// foo.call(p2, 44);

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall error: undefined is not a function");
  }

  const self =
    context === null || context === undefined ? globalThis : Object(context);
  const key = Symbol();
  self[key] = this;
  const result = self[key](...args);
  delete self[key];
  return result;
};

foo(23);
foo.myCall(p1, 34);
foo.myCall(p2, 44);
