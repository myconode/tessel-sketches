/* 01_PrivateData.js

A simple way to keep your Wifi credentials out of version control is to create a basic
node module that you do not distribute. Follow instructions in readme.

*/

// local module that exports an object with credentials
// such as a `fakeApiKey`
var creds = require('./creds')

console.log(creds.fakeAPIKey)
