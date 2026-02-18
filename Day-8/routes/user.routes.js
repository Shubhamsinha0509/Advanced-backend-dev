import {Router} from "express"

const userRouter = Router()

userRouter.get("/create-user",(req,res)=>{
    res.send("create user")
})

userRouter.get("/getAllUsers",(req,res)=>{
    res.send("Get all users")
})

userRouter.get("/getUserById",(req,res)=>{
    res.send("get user by Id")
})

export default userRouter