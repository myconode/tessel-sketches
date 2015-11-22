// Node built-ins
var fs = require('fs')
var path = require('path')
var child = require('child_process')

// Utilities
var _ = require("underscore")

// References
var appDir = process.argv.slice(2)[0] // TODO: better argv parsing
var srcDir = path.join(appDir, "src")

var ignoreDirs = ['node_modules',
                  'utils']

var withoutArgList =  [ filterDirs(srcDir) ]
                        .concat(ignoreDirs)

// srcDirs less ignoreDirs
var srcDirs = _.without.apply(this, withoutArgList)


// execute `npm install`
_.each(srcDirs, function(dir){
  var dirAbs = path.join(srcDir, dir)
  process.chdir(dirAbs)

  var stdout = child.execSync('npm install', { encoding: 'utf8' })
  process.stdout.write(stdout)
})


// Given a valid path to a directory, return a list of sub-directories
// @param {string} dir - path to directory
// @returns {array} - array of directory names
function filterDirs(dir){
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory()
  })
}
