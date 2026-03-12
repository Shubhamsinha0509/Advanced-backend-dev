import express from "express"
import cookieParser from "cookie-parser"

const app = express()
app.use(cookieParser())

const PORT = process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.cookie("name","express",{
        maxAge : 1000 * 60 * 60 *24
    })
    res.send("Hello world")
})

app.get("/product",(req,res)=>{

    // console.log(req.headers.cookie)

    console.log('Cookies',req.cookies)

    if(req.cookies.name && req.cookies.name === express){
        res.status(200).send({
        id : 1,
        name : "Item-1",
        price : "$100"
    })
    }
    res.status(403).send("You are not authorized")

})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})