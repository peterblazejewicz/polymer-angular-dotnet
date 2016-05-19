"use strict";

var browserSync = require('browser-sync').create();
var gulp = require("gulp");

var $ = require('gulp-load-plugins')();
var dotnet = require('./tasks/dotnet');
var argv = require('yargs').argv;
var opn = require('opn');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;

// reload is a noop unless '--reload' cmd line arg is specified.
// reload has no effect without '--watch'.
let reload = $.util.noop;
if (argv.reload) {
  reload = browserSync.reload;
  // reload doesn't make sense w/o watch
  argv.watch = true;
}

// openUrl is a noop unless '--open' cmd line arg is specified.
var openUrl = () => {};
if (argv.open) {
  openUrl = opn;
}

gulp.task('default', (cb) => {
  cb();
});

gulp.task('setup', (cb) => {
  runSequence(['bower', 'dotnet:restore'], cb);
});

// Install/update bower components.
gulp.task('bower', false, (cb) => {
  let proc = spawn('./node_modules/bower/bin/bower', 
    ['install'],
    {
      cwd: './', 
      stdio: 'inherit'
    });
  proc.on('close', function() {
    cb();
  });
});

gulp.task('dotnet:restore', (cb) => {
  dotnet.restore(cb);
});
