function A() {
    console.log("A")
}

function B() {
    console.log("B")
}

A()
B()

/**
 * javascript is synchronous, blocking, single-threaded language
 * code executes top to down with one line executing at any given time
 * js is blocking because of synchronous behaviour. no matter how long a previous process takes, the subsequent processes won't kick off until the former is completed, if function A has to execute an intensive chunk of code, js has to finish that without moving on to function B. Even if that code takes 10 seconds or 1 minute.
 * A thread is simply a process that js program can use to run a task. and each thread can only do one task at a time. 
 * JS has just one thread called the main thread for executing any code.
 * 
 * 
 *                  js library
 *                       |
 *                C/C++ features
 *                       |
 *                  Dependencies
 *             V8 libuv zlib crypto etc
 * 
 *      asynchronous programming -> libuv
 * 
 * 
 * ---------------------------------------------------------------------------------------------------------------------
 * 
 * LIBUV
 * Libuv is a cross-platform open-source library written in C. 
 * it's role is to provide support for handling asynchronous operations.
 * 
 * 
 */


// how call stack works?

/**
 * The main thread of execution always starts in the global scope. The global function, if we can call it that, is pushed onto the stack.
 */
console.log("first") // then this log function is pushed -> "First" is logged to console at "1ms" -> function is popped off the stack.
console.log("second") // this log function is pushed -> "second" is logged to console at "2ms" -> function is popped off the stack.
console.log("third") // this log funciton is pushed -> "third" is logged to console at "3ms" -> function is popped off the stack.
/**
 * The global function is popped off the call stack
 * everythig resides inside the global function.
 */