'use strict';

const $ = require('gulp-load-plugins')();
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create();
const dotnet = require('./tasks/dotnet');
const gulp = require('gulp-help')(require('gulp'));
const opn = require('opn');
const runSequence = require('run-sequence');
const spawn = require('child_process').spawn;
const StarterWeb = require('./appsettings.json').Defaults;

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
};

if (argv.open) {
  openUrl = opn;
}

//
// private tasks
//
/**
 * Installs Bower managed dependencies
 */
gulp.task('bower', false, (callback) => {
  let proc = spawn('../node_modules/bower/bin/bower', ['install'],
    {
      cwd: StarterWeb.appDir,
      stdio: 'inherit'
    });
  proc.on('close', callback);
});

/**
 * Run task that installs NuGet dependencies
 */
gulp.task('dotnet:restore', false, (callback) => {
  dotnet.restore(callback);
});
/**
 * Creates hosting.json from template file
 */
gulp.task('dotnet:hosting', false , (callback) => {
  let options = {
    environment: argv.ASPNETCORE_ENV || 'Development'
  };
  dotnet.createHostingConfig(options, callback);
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

gulp.task('setup', 'Sets up local environment with ASPNETCORE_ENV=Development', (callback) => {
  runSequence([
    'bower',
    'dotnet:restore',
    'dotnet:hosting'
  ], callback);
});
