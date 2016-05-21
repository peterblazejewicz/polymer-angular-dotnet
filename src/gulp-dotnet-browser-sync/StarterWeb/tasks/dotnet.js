'use strict';

const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');

/**
 * Install dotnet dependencies
 * using `dotnet restore`
 * 
 * @param callback (description)
 */
let restore = (callback) => {
  let args = ['restore'];
  spawn('dotnet', args, {
    stdio: 'inherit'
  }).on('exit', callback);
}

let createHostingConfig = (options, callback) => {
  var template = path.resolve(process.cwd(), 'hosting.json.template');
  if (fs.existsSync(file) === false) {
    throw new Error('dotnet:hosting: unable to find hosting config template');
  }
  var config = JSON.parse(fs.readFileSync(template, 'utf8'));
  config.environment = options.environment || 'Development';
  var output = path.resolve(process.cwd(), 'hosting.json');
  fs.writeFileSync(output, JSON.stringify(config, null, 2));
  callback();
};

let run = (options, callback) => {
  let url = StarterWeb.launchUrl;
  let args = ['run'];
  let env = process.env;
  env.ASPNETCORE_URLS = url || 'http://localhost:8080';
  let dotnet = spawn('dotnet', args, {
    stdio: 'inherit',
    env: env
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

}

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
}
