const data = require("./sampleMod");
const chalk = require("chalk");

console.log("This is a \x1b[31m%s\x1b[0m", data.car.make + " " + data.car.model);
console.log(chalk`I own a {cyan ${data.bike.make}} {green.bold ${data.bike.model}}`);