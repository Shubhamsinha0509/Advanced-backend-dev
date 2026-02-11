// const fs = require("fs")

// setImmediate(()=>{
//     console.log("Hello from set immediate")
// },0)

// setTimeout(()=>{
//     console.log("hello from set timeout")
// },0)


process.env.UV_THREADPOOL_SIZE = 8;

const crypto = require("crypto")
const os = require("os")

console.log(os.cpus().length)

let start = Date.now()

crypto.pbkdf2("password-1", "salt1",100000, 1024, "sha512" , ()=>{
    console.log(`${Date.now() - start} ms done`)
})
crypto.pbkdf2("password-1", "salt1",100000, 1024, "sha512" , ()=>{
    console.log(`${Date.now() - start} ms done`)
})

crypto.pbkdf2("password-1", "salt1",100000, 1024, "sha512" , ()=>{
    console.log(`${Date.now() - start} ms done`)
})

crypto.pbkdf2("password-1", "salt1",100000, 1024, "sha512" , ()=>{
    console.log(`${Date.now() - start} ms done`)
})

crypto.pbkdf2("password-1", "salt1",100000, 1024, "sha512" , ()=>{
    console.log(`${Date.now() - start} ms done`)
})

// $env:UV_THREADPOOL_SIZE=8  run in powershell to increase size of thread pool