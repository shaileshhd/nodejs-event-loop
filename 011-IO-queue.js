const fs = require("fs")

fs.readFile("001-synchronous.js", () => console.log("this is readFile 1"))
process.nextTick(() => console.log("this is process.nextTick 1"))
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)

/**
 * control enters the eventloop after queueing up all callbacks in their respective queue.
 * with no further code to execute, control enters the event loop.
 * The first callback from the nextTick queue is dequeued and executed, logging a message to the console. 
 * with the nextTick queue is empty, the event loop proceeds to the Promise queue. The callback is dequeued and executed on the call stack, printing a message in the console.
 * now the promise queue is empty and the event loop proceeds to the timer queue, the callback function is dequeued and executed. 
 * the event loop proceeds to IO queue, where we have on ecallback that is dequeued and executed, resulting in the final log message in the console.
 * 
 */