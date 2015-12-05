// 02_Modules.js
// ** For demonstration purposes only. Not intended to be deployed to tessel.
//
// Node has a module loading system that is available in Tessel programs.
// https://nodejs.org/api/modules.html
//
// Node dependencies are managed via `npm` and the `package.json` document.
// [Node package manager](https://docs.npmjs.com/)
// [package.json specification](https://docs.npmjs.com/files/package.json)
//
// Node comes with built-in modules, as does the Tessel.

// Tessel hardware interface
var tessel = require('tessel')

// Show object
console.log(tessel)
