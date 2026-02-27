import express from "express"

const privateRouter = express.Router()

privateRouter.get("/dashboard",(req,res)=>{
    res.status(200).json({
        message : "Welcome to dashboard"
    })
})

export default privateRouter