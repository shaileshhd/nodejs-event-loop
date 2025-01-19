const fs = require('fs')

// IO QUEUE WITH TIMER QUEUE

setTimeout(() => console.log("this is setTimeout 1"), 0)
fs.readFile("001-synchronous.js", () => console.log("this is readFile 1"))

/**
 * inconsitency in the output
 * unpredictability of the order of execution when using setTimeout() with a delay of 0 milliseconds and an IO asynchronous method.
 * This order depends on at which point of time control enters event loop. control may enter event loop before or after settimeout is elapsed.
 */