const str = "hello world";
console.log("1", str.charAt(0)); // h
console.log("2", str.charAt(100)); // ''
console.log("3", str.charAt(5)); // ''
console.log("4", str.charAt(3)); // l
console.log("5", str.charAt()); // h

String.prototype.myCharAt = function (index) {
  const str = String(this); // ensure it's a string
  const i = Number(index);

  if (isNaN(i) || i < 0 || i >= str.length) return "";
  return str[i];
};
