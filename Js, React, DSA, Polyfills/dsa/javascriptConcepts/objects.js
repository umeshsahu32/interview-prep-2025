// ! ways we can create objects

// ! 1  Using Object Literals
// const obj = {
//   name: "Umesh",
//   age: 25,
// };

// ! 2. Using new Object() Constructor
// const obj = new Object();
// obj.name = "Umesh";

// ! 3. Using Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const obj = new Person("Umesh", 25);

// ! 4. Using Object.assign()
// const obj = Object.assign({}, { name: "Umesh", age: 25 });

// ! 5. Using JSON.parse()
// const obj = JSON.parse('{"name":"Umesh","age":25}');

const user = {
  name: "shivam",
  age: 24,
  child: 1,
  hometown: "dabra",
  education: "BE",
};

// ! add key-value
user.work = "engineer";
user["city"] = "bikaner";

// ! delete key-value
delete user.work;
delete user["city"];

// ! print all key and values of the object (for in loop)

for (let key in user) {
  console.log(key + "   :  " + user[key]);
}

// ! Question 1
const num = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(num); // { a: 'three', b: 'two' } a is assign twice, hence will take the last assigned value

// ! Question 2
// ! create a function multiplyByTwo(obj) that multiply all numeric values of num by 2

const num2 = {
  a: 100,
  b: 200,
  title: "my nums",
};

const multiplyByTwo = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = 2 * obj[key];
    }
  }

  return obj;
};

console.log(multiplyByTwo(num2));

// ! Question 3 what will be the output of the given code

const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123; // a["object Object"] = 123  as you can not assign a object as key
a[c] = 456; // a["object Object"] = 456
console.log(a[b]); // 456

// ! Question 3 WHAT IS json.stringy and json.parse

const person = {
  name: "vikas",
  city: "gwalior",
};

// JSON.stringy() convert obj into string
const stringToObject = JSON.stringify(person);
console.log(stringToObject); // {"name":"vikas","city":"gwalior"}

// JSON.parse() convert string into a object
const objectToString = JSON.parse(stringToObject);
console.log(objectToString); // { name: 'vikas', city: 'gwalior' }

// use ==> we can not store object into local storage, if try it will be storage as [object Object]. so convert into string first
// localStorage.setItem("test", stringToObject);
// when want to get it from localstorage and use, first convert string to object
// JSON.parse(localStorage.getItem("item"));

// ! Question 4  what will be the output of the given code
console.log([..."lydia"]); // [ 'l', 'y', 'd', 'i', 'a' ]

// ! Question 5  what will be the output of the given code
const newUser = { name: "lydia", age: 24 };
const admin = { admin: true, ...newUser };
console.log(admin); // { admin: true, name: 'lydia', age: 24 }

// ! Question 6  what will be the output of the given code
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN,
// With arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).

// ! 7 what is Destructuring
let user1 = {
  userName: "Piyush",
  age: 24,
  fullName: { firstName: "piyush", lastName: "mishra" },
};

const {
  userName,
  fullName: { firstName, lastName },
} = user1;

console.log(userName); // Piyush
console.log(lastName); // mishra

// ! 7 what is the output
// function getItems(fruitList, ...args, favoriteFruit) {
//   return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")

// ...args is a rest parameter. In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.
// The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter!

// correct syntax
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

// ! 8 what is the output

let e = { greeting: "Hey!" };
let d;

d = e;
e.greeting = "Hello";
console.log(d.greeting); // Hello
// In JavaScript, all objects interact by reference when setting them equal to each other. When you change one object, you change all of them.

// ! 9 what is the output
console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

// ! 10 what is shallow copy and deep copy

// There are two ways to clone an object in Javascript:

// Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
// Deep copy: means that all levels of the object are copied. This is a true copy of the object.

// Shallow copy : A shallow copy can be achieved using the spread operator (…) or using Object.assign():
const obj = { name: "Version 1", additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = "Version 2";
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = "Version 2";
shallowCopy2.additionalInfo.version = 2;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }

// As you can see in this code snippet:

// After updating a property in the first level of the cloned objects, the original property is not updated.
// After updating a property in a deeper level, the original property is also updated. This happens because, in this case, deeper levels are referenced, not copied.

// Deep copy : A deep copy can be achieved using JSON.parse() + JSON.stringify():

const obj2 = { name: "Version 1", additionalInfo: { version: 1 } };

const deepCopy = JSON.parse(JSON.stringify(obj2));

deepCopy.name = "Version 2";
deepCopy.additionalInfo.version = 2;

console.log(obj2); // { name: 'Version 1', additionalInfo: { version: 1 } }
console.log(deepCopy); // { name: 'Version 2', additionalInfo: { version: 2 } }
