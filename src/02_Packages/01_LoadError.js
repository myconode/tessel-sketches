// 01_LoadError.js
// ** For demonstration purposes only.
// Shows what happens if dependencies are not installed (i.e. `npm install` isn't run before `tessel run <script>`)
//
// To simulate this error, be sure this project does not have dependencies installed (remove `node_modules`).
//
// After `tessel run 01_LoadError.js` is run, a stack trace from the compiler will be displayed:
// Error: Could not find module "q/index.js"
//     at js_new ([string "colony-init.lua"]:1)
//     at run ([string "colony-node.lua"]:1)
//     at require ([string "colony-node.lua"]:1)
//     at res (/app/01_LoadError.js:8)
//     at run ([string "colony-node.lua"]:1)
//     at require ([string "colony-node.lua"]:1)
//     at res (/_start.js:4)
//     at run ([string "colony-node.lua"]:1)
//     at <anonymous> ([string "cli.lua"]:1)
//
// `q` is required in this script, but if npm dependencies aren't installed, the Tessel compiler won't be able to find it.
var Q = require('q')

// Error thrown before this evaluates
console.log(Q)

// Why?
// This is meant to illustrate a realistic (and common) scenario when working with the Tessel. Only, this prepares you
// for the scary-looking stack-trace (though it does have a useful error) if you do not install your sketches' dependencies
