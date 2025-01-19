const fs = require('fs')

const readableStream = fs.createReadStream("001-synchronous.js")
readableStream.close()
readableStream.on("close", () => {
    console.log("this is from readableStream close event callback")
})
setImmediate(() => console.log("this is setImmediate 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)
Promise.resolve().then(() => console.log("this is Prommise.resolve 1"))
process.nextTick(() => console.log("this is process.nexTTick 1"))

/**
 * Close queue is processed at the end of event loop lifecycle.
 */