'use strict';

const spawn = require('child_process').spawn;
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
  let args = ['run'];
  let env = process.env;
  env.ASPNETCORE_URLS = 'http://localhost:8080';
  let dotnet = spawn('dotnet', args, {
    stdio: 'inherit',
    env: env
  });
  if (!options.reload) {
    console.log('The app should now be available at');
    dotnet.on('close', callback);
  }
}


module.exports = {
  restore: restore,
  run: run
}
