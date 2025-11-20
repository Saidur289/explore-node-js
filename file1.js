const {a: x} = require("./file2")
const {a: y} = require("./file3")
// const {add} = require("./utils/add")
// const {sub} = require("./utils/sub")
const {add, sub} = require("./utils/index2")
// console.log(x,y);
console.log(add(5, 5));
console.log(sub(13, 6));