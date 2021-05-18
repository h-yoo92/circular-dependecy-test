console.log("load 'a' first then load 'b'");
const a = require("./a");
const b = require("./b");

console.log(a);
console.log(b);
