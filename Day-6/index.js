import express from "express"
import data from "./data/data.js"

const app = express()

const PORT = process.env.PORT || 3000 

app.use(express.json())

const student = {
    name : "Shubham",
    age : 22,
    course : "B.Tech",
    email : "shubhamxyz.in@gmail.com"
}

app.get("/api/student",(req,res)=>{
    res.status(200).json(student)
})

app.get("/api/v1/users",(req,res)=>{
    // query params
    
    const {name} = req.query

    if(name){
        const user = data.filter((user)=>{
            return user.name === name
        })
       return res.status(200).send(user)
    }

    res.status(200).json(data)
})

// router params 

app.get("/api/v1/users/:id",(req,res)=>{
    const {id} = req.params
    const parsedId = parseInt(id)

    const user = data.find((user)=>user.id === parsedId) 

    res.status(200).send(user)
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})