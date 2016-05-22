'use strict';

const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const StarterWeb = require('../appsettings.json').Defaults;

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
  config['server.urls'] = options['server.urls'] || StarterWeb['server.urls'];
  config.environment = options.environment || StarterWeb.environment;
  var output = path.resolve(process.cwd(), 'hosting.json');
  fs.writeFileSync(output, JSON.stringify(config, null, 2));
  callback();
};

/**
 * Exposes `dotnet run`
 */
let run = (options, callback) => {
  let url = options.url;
  let args = ['run'];
  let dotnet = spawn('dotnet', args, {
    stdio: 'inherit'
  });
  if (!options.reload) {
    console.log(`The app should now be available at ${url}`);
    dotnet.on('close', callback);
    return url;
  }
  let port = 3000;
  browserSync.emitter.on('service:exit', callback);
  browserSync({
    notify: false,
    open: false,
    port: port,
    proxy: {
      target: url
    }
  });
  return `http://localhost:${port}`;

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
