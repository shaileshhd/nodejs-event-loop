const fs = require('fs')

// IO QUEUE

fs.readFile("001-synchronous.js", () => console.log("this is readFile 1"))
process.nextTick(() => console.log("this is process.nextTick 1"))
Promise.resolve().then(() => console.log("this is Promise.resolve 1")) 