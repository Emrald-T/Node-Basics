const http = require('http')

const port = process.env.PORT

const server = http.createServer((req, res) => {

  const req1 = http.request({
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
  }, res1 => {
    console.log(`statusCode: ${res1.statusCode}`)

    res1.on('data', d => {
      // process.stdout.write(d)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(d)
    })
  })

  req1.on('error', error => {
    console.error(error)
  })

  req1.end()
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
