import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// handles ES modules __dirname and __filename

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// middleware to log all requests

const logMiddleWare = (req, res, next)=>{
    
}