const fs = require ("fs")

//*write

fs.writeFileSync("./text.txt","Hello this is sync code")

fs.writeFile("./test.txt","Hello this is async code",(err)=>{
    if (err){
        console.log(err)
    }else {
        console.log("File written successfully")
    }
})

// The callback of fs.writeFile does NOT return res.

//*read 

const res = fs.readFileSync("./text.txt","utf-8")
console.log(res)

fs.readFile("./test.txt","utf8",(error,res)=>{
    if (error){
        console.log(error)
    }else{
        console.log(res)
    }
})

//*update/append

fs.appendFileSync("./text.txt", new Date().toDateString())

fs.appendFile("./test.txt", `Hello this is Shubham logged in at${new Date().toDateString()}\n`, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Log written successfully")
    }
})

//*delete 
