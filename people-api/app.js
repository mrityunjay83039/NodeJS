const express = require("express");
const app = express();
const {people} = require("./data");

// middleware
app.use(express.json());

// get method
app.get("/api/people", (req, res)=>{
    return res.status(200).json({success:true, data:people});
})

// post method
app.post("/api/people", (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:"Please add a name"});
    }
    return res.status(201).json({success:true, msg:"User added successfully", data:name});
})

// put method
app.put("/api/people/:id", (req, res)=>{
    const id = req.params.id;
    const {name} = req.body;

    let person = people.filter((person)=> person.id === Number(id));
    if(!person){
        return res.status(404).json({success:false, msg:"User not found"});
    }else if(!name){
        return res.status(400).json({success:false, msg:"Please add a name"});
    }else{
        const updatedPeople = people.map((user)=>{
            if(user.id === Number(id)){
                user.name = name;
            }
            return user;
        })
        return res.status(200).json({success:true, msg: "User updated successfully", data:updatedPeople});
    }
})

app.listen(9000, ()=>{
    console.log("Server is running on port 5000");
})