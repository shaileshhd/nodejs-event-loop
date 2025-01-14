// COMPLEX CODE
process.nextTick(() => console.log("this is process.nextTick 1"))
process.nextTick(() => {
    console.log("this is process.nextTick 2")
    process.nextTick(() => console.log("this is the inner next tick insite next tick"))
})
process.nextTick(() => console.log("this is process.nextTick 3"))

Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2")
    process.nextTick(() => console.log("this is the inner next tick inside Promise then block"))
})
Promise.resolve().then(() => console.log("this is Promise.resolve 3"))

/**
 * initially there are 3 callbacks in nextTick queue and 3 callbacks in promise queue.
 * with nothing left in the callstack control enters the event-loop.
 * the nexttick gets the priority, the first callback is executed and the second callback follows however second callback has another call to process.nextTick -> which pushes the callback to nexttick queue -> then executes the third callback -> we have one last callback which was pushed by second callback -> the last callback is executed by node -> nextTick queue is empty.
 * proceeding with promise queue -> first callback is executed followed by the second callback but here we have another nextTick called inside the callback -> this nexttick is pushed to nextTick queue -> third callback is executed -> now the promise queue is empty.
 * Node will once again check if there are new callbacks in the microtask queues. since there is one in the nexttick queue(added when second promise callback is executed), it executes that, which results in last log statement.
 */