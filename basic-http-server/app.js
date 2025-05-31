const http = require("http");

const server = http.createServer((req, res)=>{

    res.writeHead(200, {"content-type":"text/html"});  // status code and header
    res.write("<h1>Bsic app using http module.</h1>"); // write a response to the client
    res.end(); // this indicates the end of the response
})

server.listen(5000, ()=>{
    console.log('server is listening to 5000 port.');
})