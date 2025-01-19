const fs = require('fs')

fs.readFile("001-synchronous.js", () => console.log("this is readFile 1"))
process.nextTick(() => console.log("this is process.nexTTick 1"))
Promise.resolve().then(() => console.log("this is Prommise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)
setImmediate(() => console.log("this is setImmediate 1"))

/**
 * The readFile() callback is not queued up at the same time call stack executes all functions.
 * when the control enters the event loop the microtask queues are checked first for callbacks. they are executed and moved further to timer queue.
 * there is noe callback, which logs "setTimeout 1" to the console.
 * when the control reaches the IO queue, we expect the readFile() callback to be present. 
 * 
 * however, in reality, the event loop has to poll to check if IO operations are complete, and it only queues up completed operation callbacks. This mean that when the control enters the IO queue for the first time, the queue is still empty.
 * The control then proceeds to the polling part of the event loop, where it checks with readFile() if the task has been completed. readFile() confirms that it has, and the event loop now adds the associated callback function to the IO queue.
 * but the execution has already moved past the the IO queue, and the callback has to wait for tis turn to be executed.
 * 
 * The control then proceeds to the check queue, where it finds one callback. It logs "setImmediate 1" to the console and then starts a new iteration because there is nothing else left to process in the current iteration of the event loop.
 * 
 * now all the queues are empty except IO queue. the callback is executed, and "readFile 1" is finally logged to the console.
 * 
 * This is why "setImmediate 1" logged before "readFile 1".
 * 
 * 
 * Inference -> IO events are polled and callback functions are added to the IO queue only after the IO is complete
 */
 