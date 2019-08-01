const EventEmitter = require("events");

class myEvent extends EventEmitter {}

const myEmitter = new myEvent();
// This is the listener
myEmitter.on("event", (obj) => {
		console.log("Event triggered!!\nThe secret message is: " + obj.msg);
	})
	.on("event", (obj) => {
		console.log("Event triggered!!\nThe secret message is: " + obj.msg + "2");
	});

// This is the emitter
myEmitter.emit("event", {msg: "hello"});
