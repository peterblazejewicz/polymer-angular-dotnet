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

module.exports = {
  restore: restore
}
