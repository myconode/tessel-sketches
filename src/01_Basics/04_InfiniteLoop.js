// 03_InfiniteLoop.js
//
// Building on the previous example, we can loop forever until the Tessel is stopped (or runs out of memory),
// similar to how a classic micro-controller would run.
//
// This program loads a local node module containing a helper function using Node's module loading system.
// For more information see this projects's `package.json` dependencies
// npm local paths: https://docs.npmjs.com/files/package.json#local-paths
// Authoring npm modules: https://docs.npmjs.com/getting-started/creating-node-modules
//
// To stop this program on the command line, press `CTRL + c`

var delay = require('delay')
var count = 0

while(true){
  console.log("Count: " + count++)
  delay(1000);
}
