const EventEmitter = require('events')

const myEmitter = new EventEmitter()

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B')
    })
  }
});

myEmitter.on('event', param => {
	if (param) {
		console.log(`${param}`)
	} else {
		console.log("A")
	}
});

myEmitter.emit('event')
myEmitter.emit('event', 'C')
// Prints:
//   B
//   A
//	 B
// 	 C
