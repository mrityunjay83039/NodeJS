const http = require("http");

const {readFileSync} = require('fs');

const file = readFileSync("./index.html"); // get index.html file using fs module


const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); // status code and header
    res.write(file); // write a response to the client
    res.end(); // this indicates the end of the response
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("This is about page");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1 style="color:red; text-align:center">Page Not Found!</h1>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening to 5000 port.");
});
