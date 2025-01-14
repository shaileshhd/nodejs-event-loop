/**
 * Core part of libuv is event-loop
 * event-loop is a design pattern that orchestrates or coordinates the execution of synchronous and asynchronous code in nodejs.
 * the event loop runs continously as long as your nodejs application is up and running, handling multiple operations executing concurrently.
 * 
 * There are 6 different queues in every loop, each holing one or more callback functions that need to be executed on the call stack eventually.
 * 
 * 1 -> Timer queue(mmin-heap) 
 *      -> holds callback associated with setTimeout and setInterval.
 * 2 -> I\O queue 
 *      -> holds callback associated wuth all the async methods such as fs and http modules.
 * 3 -> Check queue
 *      -> holds callbacks associated with the setImmediate function, which is specific to node.
 * 4 -> Close queue
 *      -> holds callbacks associated with the close event of an async task.
 * 5 -> Microtask queues (these are not part of LIBUV)
 *   -> A. NextTick queue
 *      -> holds callbacks associated with the process.nextTick function.
 *   -> B. Promise queue
 *      -> holds callbacks associated with the native promise in javascript.
 */

// How the event-loop works
/**
 * All user written synchronous js code takes priority over async code that the runtime would like to execute. 
 * After the call stack is empty does the event loop come into play.
 * 
 * 
 * ORDER of execution
 * 
 * 1. Microtask queue.
 *   -> NextTick queue -> first
 *   -> Promise queue -> second
 * 2. Timer queue (timers phase)
 *      -> these represents expired timer callbacks that are now ready to be processed.
 * 3. Microtask queue. (if present)
 *   -> NextTick queue -> first
 *   -> Promise queue -> second
 *      -> executed after every callback in the timer queue.
 * 4. I/O queue (I/O phase)
 * 5. Microtask queue. (if present)
 *   -> NextTick queue -> first
 *   -> Promise queue -> second
 *      -> executed after every callback in the I/O queue.
 * 6. Check queue (Check callback phase)
 * 7. Microtask queue. (if present)
 *   -> NextTick queue -> first
 *   -> Promise queue -> second
 *      -> executed after every callback in the check queue.
 * 8. Close queue (close callback phase)
 * 9. Microtask queue. (if present)
 *   -> NextTick queue -> first
 *   -> Promise queue -> second
 *      -> executed after every callback in the check queue.
 * 
 * If there are more callbacks to be processed at this point, the loop is kept alive for one more run, and the same steps are repeated. On the other hand, if all callbacks are executed and there is no more code to process, the event loop exits.
 */