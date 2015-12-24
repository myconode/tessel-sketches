/* 04_InfiniteLoop.js

Building on the previous example, we can loop forever until the Tessel is stopped (or runs out of memory),
similar to how a classic micro-controller would run.

To stop this program on the command line, press `CTRL + c`
*/

var delay = require('delay-ms')
var count = 0

while(true){
  console.log("Count: " + count++)
  delay(1000);
}
