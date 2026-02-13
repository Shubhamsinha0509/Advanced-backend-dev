const crypto = require("crypto")

// 1.Random bytes

const randomValues = crypto.randomBytes(100)
console.log(randomValues.toString("hex"))


// 2. Create hash

const hashValue = crypto.createHash("sha256").update("Shubham").digest("hex")

const inputValue = "Shubham"

const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

if(hashValue === matchValue){
    console.log("You can login")
}else{
    console.log("Something went wrong")
}