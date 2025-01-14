// TIMER QUEUE WITH DIFFERENT TIMEOUTS

setTimeout(() => console.log("this is setTimeout 1"), 1000)
setTimeout(() => console.log("this is setTimeout 2"), 500)
setTimeout(() => console.log("this is setTimeout 3"), 0)
/**
 * Different timeout arguments are passed to setTimeout, 
 * The first timeout is set to execute after 1000ms -> this callback is queued into timer queue after 1000ms.
 */