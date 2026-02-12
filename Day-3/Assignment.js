// OBJECTIVE
// CREATE A PROGRAM IN NODE-JS USING EVENTEMITTER THAT:

// Listens for multiple types of user events (login, logout, purchase, and profile update )
// Tracks how many times each event is emitted.
// Logs a summary of all events occurences when a special summary event is triggered.



// REQUIREMENT 

// Create at least four custom events.
// emit these events multiple times with different arguments ( e.g username, item purchased)
// Tracks and store the count of each event type.
// Define a summary events that logs a detailed report of how many times each event was triggered.

const eventEmitter = require ("events")
const fs = require ("fs")

const userEmitter = new eventEmitter()

let eventCount = {
    login : 0,
    logout : 0,
    purchase : 0,
    profileUpdate:0
}

const logFile = "eventlog.json"

if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile,"utf-8")
    Object.assign(eventCount,JSON.parse(data))
}


function saveCounts (){
    fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2))
}

userEmitter.on("LOGIN",(username)=>{
    eventCount.login++
    console.log(`${username} logged in successfully✅`)
    saveCounts()
})

userEmitter.on("LOGOUT",(username)=>{
    eventCount.logout++
    console.log(`${username} logged out soccessfully❌`)
    saveCounts()
})

userEmitter.on("PURCHASE",(username,item)=>{
    eventCount.purchase++
    console.log(`${username} purchased item : ${item}`)
    saveCounts()
})

userEmitter.on("PROFILE_UPDATE",(username,field)=>{
    eventCount.profileUpdate++
    console.log(`${username} updated his profile in field : ${field}`)
    saveCounts()
})

userEmitter.on("SUMMARY",()=>{
    console.log("Event Summary:")
    console.log(`Logins : ${eventCount.login}`)
    console.log(`Logouts : ${eventCount.logout}`)
    console.log(`Purchases : ${eventCount.purchase}`)
    console.log(`ProfilUpdates : ${eventCount.profileUpdate}`)
})


userEmitter.emit("LOGIN","shubham")
userEmitter.emit("LOGOUT", "Shubham")
userEmitter.emit("PURCHASE","Shubham","Macbook")
userEmitter.emit("PROFILE_UPDATE","Shubham","Email Address")

userEmitter.emit("SUMMARY")