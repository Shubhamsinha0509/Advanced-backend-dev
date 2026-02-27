import express from "express"

const publicRouter = express.Router()

// Generate token 

publicRouter.get("/generate-token",(req,res)=>{
    const token = "token"

    res.status(200).json({
        message : "token generated, please save it for future use",
        token:token
    })
})

// Home page 

publicRouter.get("/home-page",(req,res)=>{
    res.status(200).json({
        messsage : "Welcome to home page"
    })
})

export default publicRouter