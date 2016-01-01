const fs = require('fs')
const path = require('path')
const child = require('child_process').execSync

const _ = require("underscore")

// Directories
const appDir = process.argv.slice(2)[0] // TODO: better argv parsing
const srcDir = path.join(appDir, "src")

const ignoreDirs = [ 'node_modules' ]

const withoutArgList =  [ filterDirs(srcDir) ]
                           .concat(ignoreDirs)

// srcDirs less ignoreDirs
const srcDirs = _.without.apply(this, withoutArgList)


// execute `npm install`
_.each(srcDirs, function(dir){
  const dirAbs = path.join(srcDir, dir)
  process.chdir(dirAbs)

  const stdout = exec('npm install', { encoding: 'utf8' })
  // Note: if `npm install`s return buffer is greater than 200K,
  // set a greater buffer size in `execSync` options or use `spawn()`
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
