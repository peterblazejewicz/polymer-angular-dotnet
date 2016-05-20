'use strict';

const browserSync = require('browser-sync');
const spawn = require('child_process').spawn;
const StarterWeb = require('../Properties/launchSettings.json').profiles.StarterWeb;
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


module.exports = {
  restore: restore,
  run: run
}
