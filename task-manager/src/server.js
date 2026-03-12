import express from "express"
// import cookieParser from "cookie-parser"
import session from "express-session"


import authRoutes from "./routes/auth.routes.js"

const app = express()

const PORT = process.env.PORT || 8000

// global middleware
app.use(express.json())

//routes

app.get("/",(req,res)=>{
    res.send("Welcome to task manager API")
})

app.use("/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})