const http = require('http')
const minimist = require('minimist')(process.argv.splice(3)) // used to deal with command-line arguments

const server = http.createServer((req, res) => {
	res.statusCode  = 200
	res.setHeader("Content-Type", "text/plain")
	res.end("Check the node log");
})

server.listen(3000, 'localhost', () => {
	// process.argv.forEach((val, index) => {
	  // console.log(`${index}: ${val}`)
	// })
	const args = process.argv.splice(2)
	console.log(args[0]);
	console.log(minimist['job'])
	process.exit();
})

// Call this from cmd using 'node command_line_args.js Ben --job=hero'