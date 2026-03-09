import express from "express"

const app = express()

const PORT = process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.cookie("name","express",{
        maxAge : 1000 * 60 * 60 *24
    })
    res.send("Hello world")
})

app.get("/product",(req,res)=>{
    res.send({
        id : 1,
        name : "Item-1",
        price : "$100"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})