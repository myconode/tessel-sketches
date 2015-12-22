// 02_Request.js
//
// Simple network test
//
// 1. Attempt to connect to Wifi, retry as necessary
// 2. Make an HTTP get request & end the program


// Tessel firmware
var wifi = require('wifi-cc3000')

// Node built-in
var http = require('http')

// Private data
var creds = require("./creds")

// Internal References
var timeouts = 0;
var power_cycles = 0;
var connection_attempts = 0;


// Utilities
var delay = require('delay-ms')

var connect = function(){
  // Only make connection attempt when necessary
  if (!wifi.isConnected()) {
    console.log("\nAttempt to Connect, #" + (++connection_attempts));

    // Attempt to connect
    wifi.connect(creds.wifiConfig)

    // wait an additional few seconds because the wifi chip
    // does not appear to abide by the timeout set in the wifi object
    delay(10000)
  } else {
    console.log("\nAlready Connected!\n")
  }
}

// resets the wifi chip progammatically
var powerCycle = function() {
  // when wifi chip resets, it tries to reconnect to the last saved network
  console.log("\nPower cycling, #" + (++power_cycles))

  wifi.reset(function() {
    console.log("Power cycling complete\n")
    timeouts = 0; // reset timeouts

    // wait for a bit
    delay(10000)

    // attempt to connect if necessary
    if (!wifi.isConnected()) {
        connect()
    }
  });
}


// First attempt
connect();


// wifi event-handlers
wifi.on('connect', function(data) {
  console.log("Wifi connected", data)

  // reset `connection_attempts` on success
  connection_attempts = 0

  // http://httpstat.us/ is a service for generating
  // HTTP responses based on status code
  //
  // Here, make request to see if Tessel is online
  var statusCode = 200
  //
  // request `http://httpstat.us/200` which returns a small payload
  // `200 OK`
  http.get("http://httpstat.us/" + statusCode, function(res) {
    var buffer = []

    // response callback
    res.on('data', function(data) {
        // success
        buffer.push(new Buffer(data))
        console.log('Received: ', new Buffer(data).toString())
        return
    });

  }).on('error', function(e) {
    console.log("HTTP Error: ")
    console.log(e.message)
    return
  })

  // Terminate program
  return
})

// Resets the Tessel's wifi chip if disconnected
wifi.on('disconnect', function(data) {
  console.log("Wifi disconnected", data)

  // reset and reconnect
  powerCycle()
})


// Attempt to reconnect on timeout, and reset wifi chip as necessary
wifi.on('timeout', function() {
  // tried to connect but couldn't, retry
  console.log("Wifi time out, #" + (++timeouts))

  if (timeouts > 2) {
      // reset the wifi chip
      powerCycle()
  } else {
      // try to reconnect
      connect()
  }
});


// Notify in case of error and keep attempting to connect
wifi.on('error', function(err) {
  // one of the following happened
  // 1. tried to disconnect while not connected
  // 2. tried to disconnect while in the middle of trying to connect
  // 3. tried to initialize a connection without first waiting for a timeout or a disconnect
  console.log("error emitted", err)

  // do not give up
  powerCycle()

  // ...unless we've tried 10+ times
  // See Troubleshooting section
  if (power_cycles > 10) {
    console.log(err)
    console.log("\n More than 10 failed attempts.")
    console.log("See Troubleshooting section.")
    return
  }
});
