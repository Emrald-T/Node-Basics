const fs = require("fs");

try {
	const data = fs.readFileSync("./sample-text.txt", "utf8");
	console.log(data, "\n");
	fs.stat("./sample-text.txt", (err, stats) => {
		if (err) throw err;
		console.log(stats);
	});
} catch (err) {
  console.error(err);
}
