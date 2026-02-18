import express from "express";
const app = express()

// 1. global middlewar

function sayHiMiddleware (req,res,next){
    console.log("hi i am middleware")
    next()
}

// app.use(sayHiMiddleware)

const PORT = process.env.PORT || 3000

// route specific middleware

app.get("/",sayHiMiddleware,(req,res)=>{
    res.send("hello world")
})

app.get("/",(req,res)=>{
    res.send("server connected")
})

app.listen(PORT,()=>{
    console.log(`server connected on http://localhost:${PORT}`)
})

