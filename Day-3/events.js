const eventEmitter = require("events")
const emitter = new eventEmitter()

// keymethods

// emit(eventname, [args]) --- execute
// on(eventName, Listener) --- create 



// emitter.on("GREET",(username,id)=>{
//     console.log(`hello ${username} and the id is ${id}`)
// })

// emitter.emit("GREET","Shubham","1234asdfghjyetr56")  // this is not right method



emitter.on("GREET",(args)=>{
    console.log(`hello ${args.username} & the id is ${args.id}`)
})


emitter.emit("GREET",{
    username : "Shubahm",
    id : "3456asdfghjk789"
})




