// timeout_vs_immediate.js
const fs = require("fs");


console.log("Normal 1");
console.log("Normal 2");
console.log("Normal 3");

fs.readFile("../sample-text.txt", () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});
console.log("Normal 4");
console.log("Normal 5");
console.log("Normal 6");
console.log("Normal 7");
