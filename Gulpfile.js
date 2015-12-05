
const gulp = require('gulp')
const jshint = require('gulp-jshint')
const stylish_reporter = require('jshint-stylish')

// File references
const GULPFILE = "./Gulpfile.js"

const SRC_DIR = "./src"
const SCRIPT_DIR = "./scripts"

const SRC_SCRIPTS = SRC_DIR + "/**/*.js"
const PKG_SCRIPTS = SCRIPT_DIR + "/**/*.js"
const IGNORE = "!**/node_modules/**/*"

const LINT = [ GULPFILE,
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
