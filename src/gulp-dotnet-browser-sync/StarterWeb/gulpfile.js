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
let watch = () => {
  console.log('watching...');
}

if (argv.open) {
  openUrl = opn;
}
