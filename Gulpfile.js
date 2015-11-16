
var gulp = require('gulp')
var jshint = require('gulp-jshint')
var stylish_reporter = require('jshint-stylish')

// File references
var SRC = "./src"
var SCRIPTS = SRC + "/**/*.js"
var IGNORE = "!**/node_modules/**/*"
var GULPFILE = "./Gulpfile.js"


// Task registration
gulp.task('tessel', function(){
  return gulp.src( [ GULPFILE, SCRIPTS, IGNORE ] )
    .pipe ( jshint( ) )
    .pipe ( jshint.reporter( stylish_reporter ) )
})


gulp.task('default', ['tessel']);
