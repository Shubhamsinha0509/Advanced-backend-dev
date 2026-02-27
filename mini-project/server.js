import express from "express"
import publicRoutes from "./routes/public.routes.js"
import privateRoutes from "./routes/private.routes.js"

const app = express()

const PORT = process.env.PORT || 3000

// InBuilt middleare
app.use(express.json())

// Routes middleware
app.use("/public",publicRoutes)

app.use("/private",privateRoutes)

app.get("/",(req,res)=>{
    res.send("Server connected")
})

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})