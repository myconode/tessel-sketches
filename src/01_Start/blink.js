// Adapted from http://start.tessel.io/blinky
// LICENSE: MIT

// Node Modules
// https://nodejs.org/api/modules.html#modules_modules
var tessel = require('tessel') // hardware interface, tessel built-in
var delay  = require('../utils/delay')

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high. Falsy sets it low.
var led1 = tessel.led[0].output(1)
var led2 = tessel.led[1].output(0)

// Immitate a main loop
var main = true

while(main){
  led1.toggle()
  led2.toggle()
  delay(200)
}
