// CREATE a server using express 

import express from "express"
import userData from "./data/userData.js"
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())

// GET all users

app.get("/api/v1/users",(req,res)=>{
    const {name} = req.query

    if(name){
        const filteredUser = userData.filter(
            (user) => user.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
        return res.status(200).json({
            success : true,
            message : "User fetched successfully",
            data : filteredUser

        })
    }
    res.status(200).json(userData)
})

// GET user by ID

app.get ("/api/v1/users/:id",(req,res)=>{
    const parsedID = parseInt(req.params.id)

    const user = userData.find(
        (user) => user.id === parsedID
    )

    if(!user){
        return res.status(404).json({
            message : "User not found"
        })
    }
    res.status(200).json({
        success : true,
        message : "user found",
        data : user
    })
})

// CREATE user 

app.post("/api/v1/users",(req,res)=>{
    const {name,email} = req.body

    //valiadte 
    if(!name || !email){
        return res.status(400).json({
            message : "email and name are required"
        })
    }

    // prevent duplicate email
    const emailExists = userData.find(
        (user)=> user.email.toLocaleLowerCase() === email.toLocaleLowerCase()
    )

    if(emailExists){
        return res.status(400).json({
            message : "eamil already exists"
        })
    }

    let newId

    if(userData.length > 0){
        newId = userData[userData.length - 1].id + 1
    }else {
        newId = 1
    }

    const newUser = {
        id : newId,
        email,
        name
    }

    userData.push(newUser)

    res.status(201).json({
        message : "user created successfully",
        data : newUser
    })
})



app.listen(PORT,()=>{
    console.log(`server is connected on http://localhost:${PORT}`)
})