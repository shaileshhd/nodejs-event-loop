// TIMER QUEUE

setTimeout(() => console.log("this is setTimeout 1"), 0)
setTimeout(() => console.log("this is setTimeout 2"), 0)
setTimeout(() => console.log("this is setTimeout 3"), 0)

process.nextTick(() => console.log("this is process.nextTick 1"))
process.nextTick(() => {
    console.log("this is process.nextTick 2")
    process.nextTick(() => console.log("this is the inner next tick inside next tick"))
})
process.nextTick(() => console.log("this is process.nextTick 3"))

Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2")
    process.nextTick(() => console.log("this is the inner next tick inside Promise then block"))
})
Promise.resolve().then(() => console.log("this is Promise.resolve 3"))

/**
 * when the callstack executes all statements, we end up with 3 callbacks in the nextTick queue, 3 in the promise queue, 3 in the timer queue. there is on further code to execute and control enters the event loop.
 * the 3 call backs in next tick queue are dequeued and executed in order. however there is one more process.nextTick call inside 2nd callback function which is queued -> this will execute after 3rd callback.
 * the 3 callbacks in promise queue are dequeud and executed in order of their entry. but we have one process.nextTick cal inside 2nd promise callback -> this inner nextTick is queued into nexttick queue and executed after all the callbacks are executed in promise queue.
 * at this moment both microtask queues are empty so control will move on further with timer queue.
 * there are 3 callbacks inside timer queue -> first callback is shifted out and executed -> control will again check for microtask queue(this is empty) -> again controller goes back to timer queue and executes the next callback. this process will go on until all callbacks are executed.
 * 
 */