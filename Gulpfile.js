'use strict'

var exec = require('child_process').execSync

var gulp = require('gulp')
var jshint = require('gulp-jshint')

var argv = require('minimist')( process.argv.slice(2) )

// files
var GULPFILE = "./Gulpfile.js"
var PROJ_DIR = "./projects"
var SCRIPT_DIR = "./scripts"
var PROJ_SCRIPTS = PROJ_DIR + "/**/*.js"
var PKG_SCRIPTS = SCRIPT_DIR + "/**/*.js"
var IGNORE = "!**/node_modules/**/*"
var LINT_SRC = [ GULPFILE,
                 PROJ_SCRIPTS,
                 PKG_SCRIPTS,
                 IGNORE ]


// `tessel` cli must be installed on your system
shell_has(['tessel'])


// default
gulp.task('default', ['lint']);

gulp.task('lint', function(){
  var config = { node: true, asi: true, esnext: true }

  return gulp.src( LINT_SRC )
    .pipe ( jshint( config ) )
    .pipe ( jshint.reporter('default') )
    .pipe ( jshint.reporter('fail') )
})


// Add task for checking syntax of all package.json syntax
// Add task for pruning dependencies


// checks if commands are available
// @param {Array} commands - list of commands
function shell_has(commands){
  var failures = []

  for( var c=0; c < commands.length; c++ ){
    var cmd = commands[c]
    try{
      exec('which ' + cmd, { encoding: 'utf8'} )
    }catch(e){
      failures.push(cmd)
    }
  }

  if( failures.length > 0 ){
    console.log("\nThe following commands are unavailable in your shell: \n", failures, "\n")
    process.exit(1)
  }
}
