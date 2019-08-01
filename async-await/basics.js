const fetch = require('node-fetch')

const getActors = async () => {
	try {
		const response = await fetch('https://ghibliapi.herokuapp.com/films')
		const list = await response.json()
		console.log(list[0])
	} catch (err) {
		console.log(err)
	}
}

getActors()
