// get http module. http is a built-in module in node.js
const http = require('http');

// create server
const server = http.createServer((req, res)=>{
    // send response 
    res.end("server started!");
})

// listen server to 5000 port
server.listen(5000, () => {
    console.log("server is running on port 5000");
});
