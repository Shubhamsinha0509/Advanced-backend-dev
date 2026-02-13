const os = require("os")

// 1.get os platform and user info

// console.log("OS PLATFORM",os.platform())
// console.log("USER INFO",os.userInfo())

// 2.get the os CPU core info

// console.log("CPU CORE INFO", os.cpus())
//  console.log("CPU CORE INFO", os.cpus().length)

// 3.get the free memory of the system
// console.log("Free Memory:",os.freemem(), "bytes")


// 4.Get the os CPU architecture 
// console.log("CPU Architecture:", os.arch())


// 5.Get the total memory of the system
// console.log("Total Memory:",os.totalmem(), "bytes")


// Get the home directory of the user
// console.log("Home directory:",os.homedir())


// 7.Get the host name of the system
// console.log("Host Name:",os.hostname())


//8.Get the network interface of the system
// console.log("Network Interface:",os.networkInterfaces())


//9.Get the os release info
// console.log("Os release info:",os.release())


//10. Get the os temp directory
// console.log("Os Temp Directory:",os.tmpdir())


//11.Get teh os uptime
// console.log("Os Uptime:",os.uptime())


//12. Get the os version
// console.log("Os version:",os.version())


// 13.Get the os load average
console.log("Os load Avg:",os.loadavg())
