'use strict';

const gulp = require('gulp-help')(require('gulp'));
const runSequence = require('run-sequence');
const spawn = require('child_process').spawn;
const del = require('del');
const rename = require('gulp-rename');

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
 * Install Polymer dependencies via Bower
 */
gulp.task('polymer:bower', 'Install Polymer client app dependencies', (cb) => {
  let proc = spawn('bower', ['install'],
    {
      cwd: "app",
      stdio: 'inherit'
    });
  proc.on('close', cb);
})

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

gulp.task('dotnet:watch', 'Serve application using development settings', (cb) => {
  let proc = spawn('dotnet', ['watch'],
    {
      stdio: 'inherit'
    });
  proc.on('close', cb);
});

gulp.task('dotnet:restore', 'Install dependencies via NuGet using dotnet restore acion', (cb) => {
  let proc = spawn('dotnet', ['restore'],
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
    'app/build/bundled/**',
    '!app/build/bundled/test/',
    '!app/build/bundled/polymer.json',
    '!app/build/bundled/README.md',
    '!**/.DS_Store'
  ], {
      dot: true
    }).pipe(gulp.dest('dist'));
});

/**
 * Create a hosting.json from development time template
 */
gulp.task('hosting:dev', 'Create a development time hosting.json', () => {
  return gulp.src('hosting.development.json')
    .pipe(rename('hosting.json'))
    .pipe(gulp.dest('.'));
});

/**
 * Create hosting.json for production distribution
 */
gulp.task('hosting:dist', 'Create a production time hosting.json', () => {
  return gulp.src('hosting.production.json')
    .pipe(rename('hosting.json'))
    .pipe(gulp.dest('.'));
});

/**
 * Start Kestrel server using development settings
 */
gulp.task('serve', 'Serve a local (development) version of app', (cb) => {
  runSequence(['hosting:dev', 'dotnet:build'], 'dotnet:watch', cb);
});

/**
 * Setup dependencies
 */
gulp.task('setup', 'Setup Polymer and Dotnet dependencies', (cb) => {
  runSequence(['polymer:bower', 'dotnet:restore'], cb);
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
    'hosting:dist',
    'dotnet:build',
    'dotnet:publish'
    , cb);
});
