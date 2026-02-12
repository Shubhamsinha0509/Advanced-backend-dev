// Path module

const path =  require ("path")

console.log("FILENAME📂", __filename)
console.log("DIRNAME📂", __dirname)


// 1. join 

const filepath = path.join("folder","student","data.txt")
console.log(filepath)

const parsedDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const dirname = path.dirname(filepath)
const basename = path.basename(filepath)

console.log({
    parsedDataPath,
    resolvedPath,
    extname,
    dirname,
    basename,
})