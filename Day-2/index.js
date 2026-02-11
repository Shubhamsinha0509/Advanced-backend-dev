const http = require ("http")
const fs = require ("fs")


const PORT = 8000

const myServer = http.createServer((request,response)=>{

    const log = `${Date.now()}:& From ${request.url} New request received\n`

    fs.appendFile("log.txt",log,(err)=>{
        if(err){
            console.error("Error writing to log file",err)
            response.statusCode = 500 
            response.end("Internal server error")
            return
        }
        response.end("Hello from server")
    })
})

myServer.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})