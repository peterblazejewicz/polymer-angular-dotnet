'use strict';

const $ = require('gulp-load-plugins')();
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create();
const dotnet = require('./tasks/dotnet');
const gulp = require('gulp-help')(require('gulp'));
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
let watch = () => {
  console.log('watching...');
}

if (argv.open) {
  openUrl = opn;
}

//
// private tasks
//
gulp.task('bower', false, (callback) => {
  callback();
});

gulp.task('dotnet:restore', false, (callback) => {
  callback();
});

//
// public tasks
//
gulp.task('serve', 'Run the app locally with Development settings', (callback) => {
  callback();
});

gulp.task('serve:dist', 'Run the app locally with Production settings', (callback) => {
  callback();
});

gulp.task('setup', 'Sets up local dev environment', (callback) => {
  runSequence([
    'bower',
    'dotnet:restore',
  ], callback);
});
