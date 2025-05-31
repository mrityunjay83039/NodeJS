const express = require('express');

// Important properties in express
// 1. use() : This is used to use middleware functions in the application.
// 2. get() : This is used to handle HTTP GET requests sent to the specified route.
// 3. post() : This is used to handle HTTP POST requests sent to the specified rout
// 4. put() : This is used to handle HTTP PUT requests sent to the specified rout
// 5. delete() : This is used to handle HTTP DELETE requests sent to the specified rout
// 6. all() : This is used to handle all HTTP requests sent to the specified rout
// 7. param() : This is used to handle parameters in the route.
// 8. route() : This is used to define a route for the application.
// 9. listen() : This is used to start the server and listen for incoming requests.
// 10. app : This is the application object which is used to create the server.


const app = express();
const path = require('path');


app.use(express.static("./public"))

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./index.html"));
})

app.get("/about", (req, res)=>{
    res.status(200).send("About Page") // status is option. it is used to send status code with response
})

app.all("/{*any}", (req, res) => {
    res.status(404).send("Resource Not Found!");
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})