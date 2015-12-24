/* 02_BuildSize.js
** For demonstration purposes only

At this point, this project's dependencies should be installed with `npm install`

Similar to the last group of sketches, this project is grouped based on common dependencies.
The last project only had one dependency, and if you noticed the output from the Tessel when
you uploaded your sketches, the build size was around 20 KB.

This project has a larger dependency. After uploading to Tessel, compare build size with sketches from `01_Basics`
[q](https://github.com/kriskowal/q) is a library for handling promises for future events.

When this code is deployed, compare the build size with the additional dependency.

An contrived example demonstrating how to use a deferred object
*/

var Q = require('q')

function somethingHappened(){
  // A deferred event
  var itHappened = Q.defer()

  // Simulates an asychronous event
  // In this project, we'll the deferred event will be connecting to Wifi
  setTimeout(function(){
    itHappened.resolve("Something did indeed happen!")

    // try this and comment line above
    // itHappened.reject(new Error ("Something actually didn't happen"))
  }, 1500);

  return itHappened.promise
}

// Once `somethingHappened` is resolved or rejected,
// proceed with the success or failure of the event.
// `then()` takes three callbacks: success, failure, and progress
somethingHappened().then(function(msg){
  // promise resolved
  console.log("Message from deferred: " + msg )
}, function(err){
  // promise rejected
  console.log(err)
})
