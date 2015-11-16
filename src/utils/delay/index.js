
// Lite version of [ErikDubbelboer's sleep](github.com/ErikDubbelboer/node-sleep)
// Inspired by Arduino's built-in delay()

module.exports = function delay(ms){
  var e = new Date().getTime() + (ms)
  while (new Date().getTime() <= e){ /* jshint noempty:false */ }
}
