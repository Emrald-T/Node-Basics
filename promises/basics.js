const util = require("util");
const fs = require("fs");


// Original way of dealing with promises
const getFile = fileName => {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName,(err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
};

getFile("./sample-text.txt")
.then((data) => console.log(data))
.catch((err) => console.log(err));



// Node js way of dealing with promises
function sayHelloTo(recipient) {
	console.log(`Hello ${recipient}`);
}

sayHelloTo[util.promisify.custom] = (recipient) => {
	return new Promise((resolve, reject) => {
		if (recipient) {
			resolve(recipient);
		} else {
			reject("No recipient");
		}
	});
};

const promised = util.promisify(sayHelloTo);
promised().then(recipient => sayHelloTo(recipient)).catch(err => console.log(err));
