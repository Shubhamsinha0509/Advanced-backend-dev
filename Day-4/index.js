const http = require ("http")
const fs = require("fs")

const myServer = http.createServer((req,res)=>{



    // Downloading file in wrong way

    // const file = fs.readFileSync("sample.txt")

    // response.end(file)



    // Downloading file in right way (stream)

    // const readableStream = fs.createReadStream("sample.txt")
    // readableStream.pipe(res) 
    // res.end()


    // Copy file ina bad way

    // const file = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt",file)   // output gets stored in file output.txt
    // res.end()


    // 2. Downloading file in good way (stream)
    const readStream = fs.createReadStream("sample.txt")
    const writeStream = fs.createWriteStream("output.txt")

    readStream.on("data",(chunk)=>{
        console.log("CHUNK",chunk)
        writeStream.write(chunk)
    })
})

const PORT = 8080



myServer.listen(PORT,()=>{
    console.log(`Server is connected on port ${PORT}`)
})

// ----readableStream-----pipe()----writableStream
// req----readableStream
// res----writableStream