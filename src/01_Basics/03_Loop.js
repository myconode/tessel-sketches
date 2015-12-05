// 02_Loop.js
//
// Embedded systems use a cyclic executive as an alternative to an operating system. This is
// also known as an event loop, such as Arduino's main `loop`.
//
// The body of a Tessel script will not loop forever.
// To simulate a main loop, you can use timers or loops.
//
// [Loops & Iteration](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Loops_and_iteration)

var count = 0
var limit = 5

while(count < limit){
  console.log("Count: " + count++)
}

console.log("Limit reached, exit program")
