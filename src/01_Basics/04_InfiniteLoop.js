// 03_InfiniteLoop.js
//
// Building on the previous example, we can loop forever until the Tessel is stopped (or runs out of memory),
// similar to how a classic micro-controller would run.
//
// This program loads a local node module containing a helper function using Node's module loading system.
// The program is specficied as a dependency for the `01_Basics` project in `./package.json`
//
// To stop this program on the command line, press `CTRL + c`

var delay = require('delay-ms')
var count = 0

while(true){
  console.log("Count: " + count++)
  delay(1000);
}
