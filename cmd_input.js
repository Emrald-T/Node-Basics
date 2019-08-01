const readLine = require('readline')

const rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'DWIGHT> '
})

// This is one way of doing it
// rl.question(`What's your name?\n`, (name) => {
	// console.log(`Hi \x1b[35m${name}\x1b[0m!`)
	// rl.close()
// })

console.log(require.main)
rl.prompt()
// This is another way of doing it
console.log(`What's your name?`)
rl.prompt()

// This is called once we enter a value and press 'Enter'
rl.on('line', (name) => {
	rl.prompt()
	if (name.match(/[q(uit){0,3}?,b(ye){0,2}?]$/i)) {
		rl.close()
	} else {
		console.log(`Hi \x1b[35m${name}\x1b[0m!`)
	}
	rl.prompt()
}).on('close', () => {
	rl.prompt()
	console.log('Have a good day!! :)')
	process.exit(0)
})
