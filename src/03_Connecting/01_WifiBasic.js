// 01_WifiBasic.js
// ** For demonstration purposes only
// - This is not a fault-tolerant way to connect your Tessel
//
// Simple Wifi connection using the `creds`
// local node module (see this project's README).
//
// Combines Tessel [wifi examples](http://start.tessel.io/wifi)
// LICENSE: MIT

// Tessel firmware
var wifi = require('wifi-cc3000')

// Private data
var creds = require('./creds')

// Internals
var timeouts = 0

// Utilities
var delay = require('delay-ms')

// Connect to the given wifi network
var connect = function(){
  wifi.connect(creds.wifiConfig)
}

// Reset wifi chip progammatically
function powerCycle(){
  // when the wifi chip resets,
  // it will automatically try to reconnect to the last saved network
  wifi.reset(function(){
    timeouts = 0; // reset timeouts
    console.log("done power cycling");
    // give it some time to auto reconnect
    setTimeout(function(){
      if (!wifi.isConnected()) {
        // try to reconnect
        connect();
      }
    }, 20000); // 20 second wait
  })
}


// Wifi event handlers
wifi.on('connect', function(data){
  // connection event emitter
  console.log("Connected!", data)
  delay(5000)
  console.log("Terminating program")
  return
});


wifi.on('disconnect', function(data){
  // disconnect emitted
  console.log("Disconnected", data)
  delay(1000)
  // wifi possible dropped
  // here, can make another attempt if desired
  return
})

wifi.on('timeout', function(err){
  // tried to connect but couldn't, retry
  console.log("Timed out")
  timeouts++
  if (timeouts > 2) {
    // reset the wifi chip if we've timed out too many times
    powerCycle();
  } else {
    // try to reconnect
    connect();
  }
});

wifi.on('error', function(err){
  // one of the following happened
  // 1. tried to disconnect while not connected
  // 2. tried to disconnect while in the middle of trying to connect
  // 3. tried to initialize a connection without first waiting for a timeout or a disconnect
  console.log("error emitted", err);
  // here can make more attempts or report this error
});
