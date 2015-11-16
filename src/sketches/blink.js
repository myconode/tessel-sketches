// Adapted from http://start.tessel.io/blinky

var tessel = require('tessel') // hardware interface
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
