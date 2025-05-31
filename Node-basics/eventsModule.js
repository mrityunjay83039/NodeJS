// events module : in node the events module is used to emit and listen to events
// in this case we are emitting an event called 'data' and listening to it
// it 's like a callback function but more powerful and flexible
// it can be used to communicate between different parts of the application



const EventEmitter = require("events");

// Create a new event emitter
const customEvent = new EventEmitter()

// Define a function to handle the event
customEvent.on("customeEvent", ()=>{
    console.log("Event is triggered");
})

// Trigger the event
customEvent.emit("customeEvent")


// create another event emitter
const customEvent2 = new EventEmitter()

customEvent2.on("mkm", (name, id)=>{
    console.log(`Hello ${name} with id ${id}`);
})

customEvent2.emit("mkm", "Mrityunjay Kumar Mishra", '007')