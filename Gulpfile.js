'use strict'

var spawn = require('child_process').spawn

var gulp = require('gulp')
var jshint = require('gulp-jshint')
var stylish_reporter = require('jshint-stylish')

var Q = require('q')

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


/*  external dependencies */
// `tessel` cli must be installed on your system
//  cli instructions in README.md
//shell_has( ['tessel', 'npm'] ).then(undefined, cmd_not_found)
shell_has( ['tessel', 'npm'] )


// default
gulp.task('default', ['lint']);

gulp.task('lint', function(){
  var config = { node: true, asi: true, esnext: true }

  return gulp.src( LINT_SRC )
    .pipe ( jshint( config ) )
    .pipe ( jshint.reporter( stylish_reporter ) )
    .pipe ( jshint.reporter('fail') )
})

// run or push tessel prorams with these tasks
gulp.task('tessel', ['lint', 'prune'], function(){
  var command
  var output = ""

  if( argv.c ){ command = argv.c }
  // if( argv)
    console.log(argv)

  spawn('tessel', [ command ])
    .stderr.on('data', function(data){ output += data })
    .on('close', function() { console.log(output) })
  // }, function(err){
  //     console.log(err)
  //     process.exit(1)
  // })

})

// runs `npm prune` in cwd
// ensures dependencies only specified in package.json
//
gulp.task('prune', function(done){


  spawn('npm', ['install --production'])
    .on('close', function(code){

    })

  spawn('npm', ['prune'])
    .on('close', function(code){
      if(code === 0 ){
        done()
      }
      else {
        console.log('`npm prune` failed')
        process.exit(1)
      }
    })
})



// checks if commands are available
// @param {Array} commands - list of commands
// @returns {Promise}
function shell_has(commands){
  var c = 0
  var promises = 0

  for(; c < commands.length; c++){
    var _has = Q.defer()

    console.log(' promise created ' )
    spawn('which', [ c ] )
      .on('close', check_code)

  }

  function check_code(code) {
    if(code !== 0) {
      _has.reject(c + ' not found')
    } else {
      _has.resolve()
    }
  }

  console.log(promises)

  //return _has.promise
}


function cmd_not_found(err){
  console.log(err)
  process.exit(1)
}
