const fs = require('fs')

fs.readFile("001-synchronous.js", () => {
    console.log("this is readFile 1")
    setImmediate(() => console.log("this is setImmediate 1"))
    process.nextTick(() => console.log("this is process.nexTTick 1 inside readfile 1"))
    Promise.resolve().then(() => console.log("this is Prommise.resolve 1 inside readfile 1"))
})
process.nextTick(() => console.log("this is process.nexTTick 1"))
Promise.resolve().then(() => console.log("this is Prommise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)

/**
 * process.nextTick and process.resolve executes after each callback execution in IO queue and before check queue.
 */