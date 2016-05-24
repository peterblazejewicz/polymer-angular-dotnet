'use strict';

const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const configuration = require('./config');
/**
 * Expoes `dotnet restore`
 */
let restore = (callback) => {
  let args = ['restore'];
  spawn('dotnet', args, {
    stdio: 'inherit'
  }).on('exit', callback);
};

/**
 * Exposes `dotnet build`
 */
let build = (options, callback) => {
  callback();
};

let createHostingConfig = (options, callback) => {
  var template = path.resolve(process.cwd(), 'hosting.json.template');
  if (fs.existsSync(template) === false) {
    throw new Error('dotnet:hosting: unable to find hosting config template');
  }
  var config = JSON.parse(fs.readFileSync(template, 'utf8'));
  config.contentRoot = path.join(process.cwd(), path.sep);
  config['server.urls'] = options['server.urls'] || 'http://+:5000';
  config.environment = options.environment || 'Development';
  var output = path.resolve(process.cwd(), 'hosting.json');
  fs.writeFileSync(output, JSON.stringify(config, null, 2));
  callback();
};

/**
 * Exposes `dotnet run`
 */
let run = (options, callback) => {
  var config = configuration.read();
  let url = options['server.urls'] || config['server.urls'];
  let args = (options.reload) ? ['watch'] : ['run'];
  let dotnet = spawn('dotnet', args, {
    stdio: 'inherit'
  });
  if (!options.reload) {
    console.log(`The app should now be available at ${url}`);
    dotnet.on('close', callback);
    return url;
  }
  browserSync.emitter.on('service:exit', callback);
  browserSync({
    notify: false,
    open: false,
    port: 3000,
    proxy: {
      target: 'http://127.0.0.1:5000'
    }
  });
  return `http://127.0.0.1:3000`;
};

/**
 * Exposes `dotnet watch`
 */
let watch = (callback) => {
  callback();
};


module.exports = {
  build: build,
  createHostingConfig: createHostingConfig,
  restore: restore,
  run: run,
  watch: watch
};
