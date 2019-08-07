const http = require("http");

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  let serviceReq;
  // Get request
  if (req.url === "/getData") {
    serviceReq = http.request({
        hostname: "whatever.com",
        port: 443,
        path: "/todos",
        method: "GET"
      }, response => {
        console.log(`statusCode: ${response.statusCode}`);
        response.on("data", d => {
          // process.stdout.write(d)
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(d);
        });
      });
      serviceReq.on("error", error => {
        console.error(error);
      });
      serviceReq.end();
  // Post request
  } else if (req.url === "/postData") {
    const data = JSON.stringify({
      todo: "Buy the milk"
    });

    serviceReq = http.request({
      hostname: "whatever.com",
      port: 443,
      path: "/todos",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length
      }
    }, response => {
      console.log(`statusCode: ${res.statusCode}`);

      response.on("data", d => {
        // process.stdout.write(d);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(d);
      });
    });

    serviceReq.on("error", error => {
      console.error(error);
    });

    serviceReq.write(data);
    serviceReq.end();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<p>Go to <code>/getData</code> or <code>/postData</code></p>");
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
