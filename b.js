console.log("access to 'b'");
exports.loaded = false;
console.log("'b' exported 'loaded'");

const a = require("./a");
console.log("'b' loaded 'a' -> ", a);

module.exports = {
  aWasLoaded: a.loaded,
  loaded: true,
};
console.log("'b' exported module");
