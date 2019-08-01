const chalk = require("chalk");
const ProgressBar  = require("progress");

const option = process.argv.splice(2)[0];

switch (option) {
	// prints both, in the order mentioned
	case "both": {
				const x = "X";
				const y = "Y";
				console.log(x, y);
				break;
			}

	// printing like C/C++ - %s for string, %d for numbers, %o for objects
	case "dynamic": console.log("This is a dynamic %s, printed %d times. An object is %o", "string", 1, {name: "Mr. Object"});
				break;

	// counting the number of times a string is printed in the console
	case "count": {
					const oranges = ["orange", "orange"];
					const apples = ["just one apple"];
					oranges.forEach(fruit => {
						console.count(fruit);
					});
					apples.forEach(fruit => {
						console.count(fruit);
					});
					break;
			}

	// Stack trace
	case "trace": {
				const function1 = () => console.trace();
				const function2 = () => function1();
				function2();
				break;
			}

	// Measure time taken by function to run
	case "timer": {
				const doSomething = () => console.log("This is something");
				const measureTime = () => {
					console.time("doSomething()");
					doSomething();
					console.timeEnd("doSomething()");
				};
				measureTime();
				break;
			}

	// Colored terminal text
	case "color": console.log("\x1b[31m%s\x1b[0m", "hi!");
				console.log(chalk.yellow("This is using chalk"));
				console.log(chalk.blue.bgRed.bold("Hello world!"));
				break;

	// Creates a progress bar
	case "progress": {
				const bar = new ProgressBar("[:bar] :rate/bps :etas", {total: 10});
				const timer = setInterval(() => {
					bar.tick();
					if(bar.complete) {
						clearInterval(timer);
					}
				}, 100);
				break;
			}
}
