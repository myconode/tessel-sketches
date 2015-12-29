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

// first callback to then() is
connect().then(function(data){
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


//

(1) Establish connection.
//     a .Connect to network
function connect(){
  net.initConnect(wifi, creds.wifi, timeouts)

    // * Event handlers * //

  wifi.on('connect', function(data){
    online.resolve("Connected!!!");
  });

  wifi.on('disconnect', function(data){
    online.reject("Promise not fulfilled, disconnecting");
  });

  wifi.on('timeout', function(err){
    online.notify("Timed out. Number: " + timeouts);
    timeouts++;
    if (timeouts > 3) {
      console.log("Too many timeouts. Power cycling Wifi module");
      // timeouts.reset();
      timeouts = 0;
      net.powerCycle(wifi, creds.wifi, timeouts);
    } else {
      console.log("Reconnecting...");
      net.reConnect(wifi, creds.wifi);
    }
  });

  wifi.on('error', function(err){
    // one of the following happened
    // 1. tried to disconnect while not connected
    // 2. tried to disconnect while in the middle of trying to connect
    // 3. tried to initialize a connection without first waiting for a timeout or a disconnect
    console.log("Wifi connection Error: ", err);
    online.reject();
  });



  online.promise.then(function(msg){
    console.log(msg);

    _http.post(firebase, Date.now().
        then()
  }, function(err){
    console.log(msg);
  }, function(waiting)

  );
}

