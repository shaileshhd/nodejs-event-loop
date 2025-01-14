// asynchronous execution
/**
 * The main thread of execution always starts with the global scope.
 * The global function is pushed on to the call stack
 */
const fs = require('fs')
const path = require('path')

console.log('first') // 1. this log function is pushed on to the call stack 'first' -> executes and logs "first" -> popped off of the stack
fs.readFile(path.join(__dirname, "synchornous.js"), () => {
    console.log('second') // 2. this parent call back function is pushed to stack. since this is async operation it is off-loaded to libuv. js pops off the readFile method from the call stack. in the background libuv starts to read the file contents on the separate thread.
    // 4. read task is completed in the thread pool. the associated callback function is now executed on the call stack. -> within call back there is a log function is pushed to callstack -> log function executes and logs "second" -> log function popped off ->  callback function is popped off -> end of process
})
console.log('third') // 3. this log function is pushed on to the call stack 'second' -> executes and logs "third" -> popped off of the stack 

/**
 * output -> 
 * first
 * third
 * second
 */

