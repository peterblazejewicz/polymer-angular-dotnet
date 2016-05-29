'use strict';

const gulp = require('gulp-help')(require('gulp'));
const runSequence = require('run-sequence');
const spawn = require('child_process').spawn;
const del = require('del');

/**
 * Build Polymer app using polymer build
 */
gulp.task('polymer:build', 'Create local polymer build', (cb) => {
  let proc = spawn('polymer', ['build'],
    {
      cwd: "app",
      stdio: 'inherit'
    });
  proc.on('close', cb);
});

/**
 * Clean generated content dist directory
 */
gulp.task('clean:dist', false, () => {
  return del('dist');
});

/**
 * Clean generate app/build directory
 */
gulp.task('clean:build', false, () => {
  return del('app/build');
});

/**
 * Clean build/publish directory
 */
gulp.task('clean:publish', false, () => {
  return del('bin');
});

/**
 * Clean generated content
 */
gulp.task('clean', 'Clean generated content', (cb) => {
  runSequence(['clean:dist', 'clean:build', 'clean:publish'], cb);
});

/**
 * Create dotnet build
 */
gulp.task('dotnet:build', 'Create local dotnet build', (cb) => {
  let proc = spawn('dotnet', ['build'],
    {
      stdio: 'inherit'
    });
  proc.on('close', cb);
});

gulp.task('dotnet:publish', 'Create local dotnet publish', (cb) => {
  let proc = spawn('dotnet', ['publish'],
    {
      stdio: 'inherit'
    });
  proc.on('close', cb);
});

/**
 * Copy content from Polymer generated app/build/bundled
 * directory into standard *dist*
 */
gulp.task('copy:dist', 'Copy build into dist', () => {
  return gulp.src([
    'app/build/bundled/*',
    '!app/build/bundled/test',
    '!app/build/bundled/polymer.json',
    '!app/build/bundled/README.md',
    '!**/.DS_Store'
  ], {
    dot: true   
  }).pipe(gulp.dest('dist'));
});

/**
 * Run build tasks
 */
gulp.task('build', 'Create local build', (cb) => {
  runSequence(
    'clean',
    'polymer:build',
    'copy:dist',
    'clean:build',
    'dotnet:build',
    'dotnet:publish'
    , cb);
});
