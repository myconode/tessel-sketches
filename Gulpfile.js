
var gulp = require('gulp')
var jshint = require('gulp-jshint')
var stylish_reporter = require('jshint-stylish')

// File references
var GULPFILE = "./Gulpfile.js"

var SRC_DIR = "./src"
var SCRIPT_DIR = "./scripts"

var SRC_SCRIPTS = SRC_DIR + "/**/*.js"
var PKG_SCRIPTS = SCRIPT_DIR + "/**/*.js"
var IGNORE = "!**/node_modules/**/*"

var LINT = [ GULPFILE,
             SRC_SCRIPTS,
             PKG_SCRIPTS,
             IGNORE
           ]

// Lint scripts
// https://github.com/spalger/gulp-jshint
gulp.task('lint', function(){
  return gulp.src( LINT )
    .pipe ( jshint() )
    .pipe ( jshint.reporter( stylish_reporter ) )
    .pipe ( jshint.reporter('fail') )
})


gulp.task('default', ['lint']);
