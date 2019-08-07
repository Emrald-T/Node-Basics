const car = {
	make: "Nissan",
	model: "Skyline"
};

// First way to do it
//module.exports = car;

const bike = {
	make: "Yamaha",
	model: "FZ25"
};

// Second way to do it
exports.car = car;
exports.bike = bike;
