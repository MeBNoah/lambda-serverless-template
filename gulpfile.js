'use strict'

var gulp = require('gulp')
var mocha = require('gulp-mocha')
var istanbul = require('gulp-istanbul')
var standard = require('gulp-standard')

gulp.task('istanbul', function (done) {
  var TEST_FILE = process.env.TEST_FILE || '*'

  gulp.src(['src/**/*.js'])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['test/**/' + TEST_FILE + '.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran
        .on('end', function () {
          process.exit(0)
        })
    })
})

gulp.task('standard', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: false
    }))
})

gulp.task('test', ['standard', 'istanbul'])
