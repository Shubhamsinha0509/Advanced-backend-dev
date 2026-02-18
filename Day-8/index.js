import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express()

const PORT = process.env.PORT || 3000

app.use("/api/v1/users",userRouter)

app.get("/",(req,res)=>{
    res.send("server connected")
})

app.listen(PORT,()=>{
    console.log(`server connected on http://localhost:${PORT}`)
})

