const chalk = require("chalk");

const promiseCall = name => {
  return new Promise((resolve, reject) => {
      if (name) {
        setTimeout(() => resolve(name), 0);
      } else {
        reject(new Error("an error occurred\n"));
      }
  });
};

const asyncCall = async () => {
  const name = await promiseCall("Emrald");
  console.log("From async function\n");
  return `Called promiseCall() and it returned ${name}\n`;
};


console.log(chalk.green("A normal log\n")); // Always first
asyncCall().then(data => {
  console.log(data);
  setImmediate(() =>console.log(chalk`{red Immediately after async\n}`)); // Tries to be run asap
  setTimeout(() => console.log(chalk`{blue.bold Timeout 0 after async\n}`), 0); // If time is > 5ms, this will be called after setImmediate
});

setImmediate(() =>console.log(chalk`{red Aint got no time to waste! Called immediate\n}`)); // Tries to be run asap
setTimeout(() => console.log(chalk`{blue.bold Timeout 0\n}`), 0); // If time is > 5ms, this will be called after setImmediate
console.log(chalk.green("Even though placed at the end, this will be called 2nd\n")); // Always first
