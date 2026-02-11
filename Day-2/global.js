// console.log(global)

setTimeout(()=>{
    console.log("hello there")
},2000)


let count = 0 

const interval = setInterval(()=>{
    console.log(`Interval count : ${++count}`)

    if(count === 5){
        clearInterval(interval)
    }
},2000)