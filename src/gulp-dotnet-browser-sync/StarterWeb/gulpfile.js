'use strict';

const $ = require('gulp-load-plugins')();
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create();
const dotnet = require('./tasks/dotnet');
const gulp = require('gulp');
const opn = require('opn');
const runSequence = require('run-sequence');
const spawn = require('child_process').spawn;

// reload is a noop unless '--reload' cmd line arg is specified.
// reload has no effect without '--watch'.
let reload = $.util.noop;

if (argv.reload) {
  reload = browserSync.reload;
  // reload doesn't make sense w/o watch
  argv.watch = true;
}

// openUrl is a noop unless '--open' cmd line arg is specified.
let openUrl = () => { };
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
  proc.on('close', function () {
    cb();
  });
});

gulp.task('dotnet:restore', (cb) => {
  dotnet.restore(cb);
});

gulp.task('serve', (cb) => {
  let url = dotnet.run({
    reload: argv.reload
  }, cb);
  setTimeout(openUrl.bind(null, url, null, null), 1e3);
});
