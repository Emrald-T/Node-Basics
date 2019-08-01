const fetch = require('node-fetch')

const f1 = fetch("https://ghibliapi.herokuapp.com/films")
const f2 = fetch("http://dummy.restapiexample.com/api/v1/employee/4324")

// Called after all the promises have been completed
Promise.all([f1, f2])
.then(res => {
    console.log('Array of results', res)
})
.catch(err => {
	console.error(err)
})


// We can even respond to each output separately
Promise.all([f1, f2])
.then(([r1, r2]) => {
	console.log("The final output", r1, r2)
})
.catch(err => {
	console.error(err)
})