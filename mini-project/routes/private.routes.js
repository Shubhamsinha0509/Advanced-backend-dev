import express from "express"
import authMiddleware from "../middleware/auth.middleware.js"

const privateRouter = express.Router()

privateRouter.get("/dashboard",authMiddleware,(req,res)=>{
    res.status(200).json({
        message : `Welcome to dashboard ${req.user.name}`
    })
})

export default privateRouter