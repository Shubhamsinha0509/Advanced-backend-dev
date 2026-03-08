import express from "express"
import publicRoutes from "./routes/public.routes.js"
import privateRoutes from "./routes/private.routes.js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import logMiddleWare from "./middleware/log.middleware.js"


const app = express()
const PORT = process.env.PORT || 3000


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if(!fs.existsSync(path.join(__dirname, "logs"))){
    fs.mkdirSync(path.join(__dirname, "logs"))
}


// InBuilt middleare
app.use(express.json())

// Global custom middleware
app.use(logMiddleWare)

// Routes middleware
app.use("/public",publicRoutes)

app.use("/private",privateRoutes)

app.get("/",(req,res)=>{
    res.send("Server connected")
})

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})