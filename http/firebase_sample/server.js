const http = require("http");
const fs = require("fs");
const admin = require("firebase-admin");
const ejs = require("ejs");
const LRU = require("lru-cache");

ejs.cache = new LRU(100); // LRU cache with 100-item limit

// Firebase configuration
const cred = require("./firebaseAuth.json");
const firebaseConfig = {
  credential: admin.credential.cert(cred),
  databaseURL: "https://nodehttpsample.firebaseio.com",
  projectId: "nodehttpsample"
};
admin.initializeApp(firebaseConfig);
let db = admin.firestore();

// Server config
http.createServer((request, response) => {

  // Common try-catch block
  try {
    // Get CSS files, if needed
    if (request.url.includes(".css")) {
      let styleCSS = fs.readFileSync(__dirname + "/css/" + request.url, "utf-8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css");
      response.end(styleCSS);

    // Get JS files for the frontend logic
    } else if (request.url.includes(".js")) {
      let logicJS = fs.readFileSync(__dirname + "/views/" + request.url, "utf-8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/javascript");
      response.end(logicJS);

    // Get users list
    } else if (request.url === "/getUsers") {
      let usersPage = fs.readFileSync(__dirname + "/views/userList.ejs", "utf-8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      // Get the data from firestore
      db.collection("users").get()
        .then((snapshot) => {
          let data = [];
          snapshot.forEach((doc) => {
            // console.log(doc.id, "=>", doc.data(), "\n");
            data.push({id: doc.id, name: doc.data().Name});
          });
          response.end(ejs.render(usersPage, {
            title: "User List",
            data: data
          }));
        })
        .catch((err) => {
          response.end("<p>Error getting documents</p>");
          console.log("Error getting documents", err);
        });

    // Default - get the index page
    } else {
      let indexPage = fs.readFileSync(__dirname + "/views/index.ejs", "utf-8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end(ejs.render(indexPage, {
        title: "Home",
        user: {name: "Emrald"}
      }));
    }
  } catch (err) {
    console.log("Check the console\n", err);
    process.exit(0);
  }
}).listen(3000, () => {
  console.log("Server started at 3000");
});
