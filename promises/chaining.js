const fetch = require('node-fetch')

const status = response => {
	if(response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}


const json = response => {
	return Promise.resolve(response.json())
}

// The Fetch API is a promise-based mechanism, and calling fetch() is equivalent to defining our own promise using new Promise().
// Node js doesnt come with the fetch API. So use 'node-fetch' module instead
fetch("https://ghibliapi.herokuapp.com/films")
.then(status)
.then(json)
.then(data => {
	console.log("The final data", data)
})
.catch(err => new Error(err))
.catch(err => console.log("Requested failed", err))
// Cascading catch