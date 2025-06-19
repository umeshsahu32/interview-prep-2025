function foo(age, city) {
  console.log(`${this.name} is ${age} years old from ${city}`);
}

const p1 = {
  name: "Vikas",
};

const p2 = {
  name: "vishal",
};

globalThis.name = "shivam";

// foo(35, "Gwalior");
// foo.apply(p1, [27, "Delhi"]);
// foo.apply(p2, [30, "Jamnapar"]);

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("myApply error: undefined is not a function");
  }

  const self =
    context === null || context === undefined ? globalThis : Object(context);
  const key = Symbol();
  self[key] = this;
  const result = self[key](...args);
  delete self[key];
  return result;
};

foo(35, "Gwalior");
foo.myApply(p1, [27, "Delhi"]);
foo.myApply(p2, [30, "Mumbai"]);
