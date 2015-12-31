/* 03_AsyncWifiBasic.js

A step towards a fault-tolerant mechanism for connecting
the Tessel to the Internet.

Simple Wifi connection using the `creds`
local node module (see this project's README).

Q is promise library
---------------------------------------------------------
Promises are used for deferred and asychronous code.

A Promise represents an operation that hasn't yet completed,
but is expected to occur in the future.

This sketch creates a deferred object to represent the Tessel's
future connected state. If it connects as intended, then() is
used to do something else

https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
http://documentup.com/kriskowal/q/
*/

var wifi = require('wifi-cc3000')
var Q  = require('q')
var delay = require('delay-ms')

// Local configuration
var creds = require('./creds')

// interals refs
var timeouts = 0

// main
while(true){
  // then() takes 3 callbacks
  // 1. success
  // 2. failure
  // 3. update
  connect().then( success, failure, update )

  console.log('Offline. Attempting to reconnect...')
}

function success(data){
  // event loop after connection
  while(true){
    try{
      console.log('Tessel connected')
      console.log('Data passed via promise resolution:', data)
      delay(2000)
    }catch(e){
      // display error but do not throw
      console.log(e)
    }
  }
}

function failure(err){
  console.log("Couldn't connect:", err)
}

function update(msg){
  console.log("Online Update:", msg)
}


// connect to wifi
// returns a promise
function connect(){
  var online = Q.defer()

  initConnect(wifi, creds.wifi, timeouts)

  // Event handler registration
  wifi.on('connect', function(data){
    online.resolve("Connected!!!")
  })

  wifi.on('disconnect', function(data){
    online.reject("Disconnected:", data)
  })

  wifi.on('error', function(err){
    // one of the following happened
    // 1. tried to disconnect while not connected
    // 2. tried to disconnect while in the middle of trying to connect
    // 3. tried to initialize a connection without first waiting for a timeout or a disconnect
    online.reject(err)
  })

  wifi.on('timeout', function(err){
    online.notify("Timed out. Number: " + timeouts)
    timeouts++
    if (timeouts > 3) {
      console.log("Too many timeouts. Power cycling Wifi module")
      timeouts = 0
      powerCycle(wifi, creds.wifi, timeouts)
    } else {
      console.log("Reconnecting...")
      reConnect(wifi, creds.wifi)
    }
  })


  return online.promise
}

/* wifi helpers */

// ensure not already connected before attempt
function initConnect(wifi, creds, timeouts){
  if (wifi.isConnected()) {
    console.log("Reestablishing connection.")
    wifi.disconnect()
    reset(wifi, creds, timeouts)
  }else {
    console.log('Connecting...');
    wifi.connect(creds);
  }
}

// reset the wifi chip progammatically
function reset(wifi, creds, timeouts){
   // when the wifi chip resets, it will automatically try to reconnect
  // to the last saved network
  wifi.reset(function(){
    if (timeouts){ timeouts = 0 }
    console.log("done power cycling")

    // give it some time to auto reconnect
    setTimeout(function(){
      if (!wifi.isConnected()) {
        // try to reconnect
        reConnect(wifi, creds)
      }
    }, 12000) // wait 12 sec
  })

  console.log(resetting)
}

function reConnect(wifi, creds){
  if (wifi.isConnected()) {
    console.log("Already connected.")
  }else {
    console.log('Connecting...')
  }

  wifi.connect(creds)
}
