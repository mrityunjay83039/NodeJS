const express = require("express");
const app = express();
const {people} = require("./data");

// middleware
app.use(express.json());

// get method
app.get("/api/people", (req, res)=>{
    return res.status(200).json({success:true, data:people});
})



app.listen(9000, ()=>{
    console.log("Server is running on port 5000");
})