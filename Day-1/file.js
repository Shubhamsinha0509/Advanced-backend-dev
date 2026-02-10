const { error } = require("console")
const fs = require ("fs")

// sync Blocking code , async Non Blocking code


//*write
fs.writeFileSync("./text.txt", "This is sync writing")

fs.writeFile("./test.txt", "This is async writing", (err) => {
    console.log(err)
})   // async accepts callback, by any chance we get error we log it

//*read

const res = fs.readFileSync("./text.txt", "utf-8")
console.log(res)


fs.readFile("./test.txt","utf8",(error,res) =>{
    if (error){
        console.log(error)
    }
    else {
        console.log(res)
    }
})

//*update / append

fs.appendFileSync("./text.txt", new Date().toDateString())



//*delete


