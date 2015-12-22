// 02_PrivateData.js
// ** For demonstration purposes only
//
// One simple way to keep your Wifi credentials out of version control is to create a basic
// node module that you do not distribute. Follow instructions in readme.
//
// Also you'll notice this sketch does not use the previous dependency.
// 1. Try deploying this code to the Tessel and take note of the build size
// 2. Delete this project's `node_modules`, re-run this script and check the build size
//
// Since this sketch does not actually share common dependencies with the others,
// it would be more efficient to move into a new project directory.

var creds = require('./creds')

console.log(creds.fakeAPIKey)
