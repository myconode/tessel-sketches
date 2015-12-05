// 05_Blink.js
// Adapted from http://start.tessel.io/blinky
// Copyright (c) 2015 Technical Machine
// License: MIT
//
// Use the Tessel hardware interface library to turn on/off onboard LEDs

var tessel = require('tessel')
var delay  = require('delay-ms')

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high. Falsy sets it low.
var led1 = tessel.led[0].output(1)
var led2 = tessel.led[1].output(0)

var main = true

while(main){
  led1.toggle()
  led2.toggle()
  console.log("I'm blinking!!!")
  delay(200)
}
