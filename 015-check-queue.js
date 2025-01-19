setImmediate(() => console.log("this is setImmediate 1"))
setImmediate(() => {
    console.log("this is setImmediate 2")
    process.nextTick(() => console.log("this is process.nextTick 1 inside setImmediate 2"))
    Promise.resolve().then(() => console.log("this is Promise.resolve 1 inside setImmediate 2"))
})
setImmediate(() => console.log("this is setImmediate 3"))

/**
 * process.nextTick and process.resolve executes after each callback execution in check queue.
 */