const express = require("express");
const app = express();
const {people} = require("./data");
const peopleRoute = require("./routers/peopRoute");

// middleware
app.use(express.json());
app.use("/api/people", peopleRoute);

app.listen(9000, ()=>{
    console.log("Server is running on port 9000");
})