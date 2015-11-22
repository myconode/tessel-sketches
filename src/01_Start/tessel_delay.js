// Halt script execution for given number of microseconds.
// Inspired by Arduino's built-in delay().
//
// Those already working with Javascript may prefer `setTimeout`

var delay = require('../utils/delay')

console.log("\nDoing something...")
delay(2000)
console.log("...continue doing something\n")

// End program
return
