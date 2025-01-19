setImmediate(() => console.log("this is setImmediate 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)

/**
 * The order of execution is not consistent
 */