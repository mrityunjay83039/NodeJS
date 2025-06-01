const {people} = require("../data");

const getPeople = (req, res)=>{
    return res.status(200).json({success:true, data:people});
}

const addPeople = (req, res) => { 
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:"Please add a name"});
    }

    const newPerson = {
        id: people.length + 1, // Simple ID generation
        name: name
    };
    people.push(newPerson);
    
    return res.status(201).json({success:true, msg:"User added successfully", data:newPerson});
}

const editPeople = (req, res) => {
    const id = req.params.id;
    const {name} = req.body;

    let person = people.find((person) => person.id === Number(id)); 
    if(!person){ 
        return res.status(404).json({success:false, msg:"User not found"});
    } else if(!name){
        return res.status(400).json({success:false, msg:"Please add a name"});
    } else {
        const updatedPeople = people.map((user) => {
            if(user.id === Number(id)){
                user.name = name;
            }
            return user;
        })
        return res.status(200).json({success:true, msg: "User updated successfully", data:updatedPeople});
    }
}
module.exports = {getPeople, addPeople, editPeople}