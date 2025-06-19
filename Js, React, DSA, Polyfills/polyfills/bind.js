function foo(age, city) {
  console.log(`${this.name} is ${age} years old from ${city}`);
}

const p1 = {
  name: "Vikas",
};

const p2 = {
  name: "vishal",
};

// const res1 = foo.bind(p1, 34);
// const res2 = foo.bind(p2, 44);

// res1("Gwalior");
// res2("Mumbai");

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myBind error: target is not callable");
  }

  const orgFn = this;

  return function (...otherArgs) {
    const self =
      context === null || context === undefined ? globalThis : Object(context);
    const key = Symbol();
    self[key] = orgFn;

    const result = self[key](...args, ...otherArgs);
    delete self[key];
    return result;
  };
};

const res1 = foo.myBind(p1, 34);
const res2 = foo.myBind(p2, 44);

res1("Gwalior");
res2("Mumbai");
