import express from "express"
// import cookieParser from "cookie-parser"
import session from "express-session"


import authRoutes from "./routes/auth.routes.js"

const app = express()

const PORT = process.env.PORT || 8000

// global middleware
app.use(express.json())
app.use(session({
    secret : "zibrish824r2kjbaoud",
    resave : false,
    saveUninitialized: false,
    cookie :{
        httpOnly : true,
        secure : false,
        maxAge : 1000*60*60*24
    }
}))

//routes

app.get("/",(req,res)=>{
    res.send("Welcome to task manager API")
})

app.use("/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})