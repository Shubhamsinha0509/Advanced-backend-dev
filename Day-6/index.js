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

// POST request (for sending data to the server)

app.post("/api/v1/users",(req,res)=>{
    const {name,email} = req.body

    const newUser = {
        id: data.length+1,
        name,
        email
    }

    data.push(newUser)

    res.status(201).send({
        message : "user created successfully",
        data : newUser
    })

    res.status(201).send("Data has been added successfully")
})

// PUT request (update all fields)

app.put("/api/v1/users/:id",(req,res)=>{
    const {body} = req
    const {id} = req.params

    const parsedId = parseInt(id)
    const userIndex = data.findIndex((user)=>user.id === parsedId)

    if(userIndex === -1){
       return res.status(404).send("User not found")
    }

    data[userIndex] = {
        id : parsedId,
        ...body
    }

    res.status(201).send({
        message: "User updated",
        data : data[userIndex]
    })
})


// PATCH request (update specificvc field)

app.patch("/api/v1/users/:id",(req,res)=>{
    const {body} = req
    const {id} = req.params

    const parsedId = parseInt(id)
    const userIndex = data.findIndex((user)=>user.id === parsedId)

    if(userIndex === -1){
       return res.status(404).send("User not found")
    }

    data[userIndex] = {
        ...data[userIndex],...body
    }

    res.status(201).send({
        message: "User updated",
        data : data[userIndex]
    })
})


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

// DELETE request