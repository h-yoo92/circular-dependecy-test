console.log("access to 'a'");
exports.loaded = false;
console.log("'a' exported 'loaded'");

const b = require("./b");
console.log("'a' loaded 'b' -> ", b);

module.exports = {
  bWasLoaded: b.loaded,
  loaded: true,
};
console.log("'a' exported module");
