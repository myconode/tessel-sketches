/* 02_Modules.js

node.js has a module loading system that is available to Tessel programs.
https://nodejs.org/api/modules.html

Node dependencies are managed via `npm` and the `package.json` interface.
[Node package manager](https://docs.npmjs.com/)
[package.json specification](https://docs.npmjs.com/files/package.json)

Node comes with built-in modules, as does the Tessel.
*/

// Tessel hardware interface
var tessel = require('tessel')

// The program is specficied as a dependency for this project in `./package.json`
// It exports a function that halts the script for a given number of milliseconds
var delay = require('delay-ms')

console.log("\nHello...\n")
delay(2000)
console.log("...Tessel!")
delay(4000)

// Shows the Tessel hardware interface
console.log(tessel)
