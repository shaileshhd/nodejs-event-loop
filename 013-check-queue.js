const fs = require('fs')

fs.readFile("001-synchronous.js", () => {
    console.log("this is readFile 1")
    setImmediate(() => console.log("this is setImmediate 1"))
})
process.nextTick(() => console.log("this is process.nexTTick 1"))
Promise.resolve().then(() => console.log("this is Prommise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)

/**
 * From IO polling ->
 * - after IO polling, readFile() callback is queued in IO queue
 * - control further proceeds to check queue, where the queue is empty. and queues are empty too upto the end of loop.
 * - in the second loop, there is one callback function in IO queue. that is executed and "readFile 1" is logged.
 * - there is also one setImmediate function -> that is queued in check queue. 
 * - now the IO queue is empty and control proceeds further to check queue.
 * - there is one callback function which was queued from readFile(), that callback is executed. 
 * - no further queues upto the end of loop. 
 */