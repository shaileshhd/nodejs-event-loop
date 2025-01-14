// MICROTASK QUEUE

// NEXTTICK
/**
 * The global function is pushed onto the callstack.
 */
console.log("1") // log function pushed to callstack -> executed and logged "1" -> popped off the callstack
process.nextTick(() => console.log("2")) // nexttick pushed to callstack -> popped off to event loop -> pushed to nexttick queue -> shifted callback from queue and pushed to callstack -> log function pushed to stack -> executed -> log gunction popped off the stack -> callback popped off the stack.
console.log("3") // log function pushed to callstack -> executed and logged "1" -> popped off the callstack -> enters event loop.
/**
 * global function is popped off the callstack.
 */

// PROMISE AND NEXTTICK
/**
 * Global function is pushed to the callstack
 */
Promise.resolve().then(() => console.log("this is Promise.resolve 1")) // promise.resolve().then(cb) is pushed to the callstack -> callback is queued to promise queue -> promise.resolve.then is popped off the callstack
process.nextTick(() => console.log("this is process.nextTick 1")) // process.nextTick(cb) is pushed to the callstack -> callback is queued to nextTick queue -> process.nextTick is popped off the callstack
/**
 * now that the callstack has only global function -> the control is moved on to the event loop -> nextTick queue callback is shifted and pushed to callstack -> callback has a console.log which is pushed to callstack -> log function executed -> log function is popped off the callstack -> callback is logged off the callstack -> nexttick queue is empty.
 * promise queue has one callback -> this cb is shifted and pushed to callstack -> callback's console.log is pushed to callstack -> log function executed -> log function is popped off the callstack -> callback is logged off the callstack -> promise queue is empty.
 * global function is popped out of the callstack.
 */


