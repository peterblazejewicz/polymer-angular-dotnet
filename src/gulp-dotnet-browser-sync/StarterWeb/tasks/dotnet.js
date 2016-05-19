'use strict';

var spawn = require('child_process').spawn;
/**
 * Install dotnet dependencies
 * using `dotnet restore`
 * 
 * @param callback (description)
 */
function restore(callback) {
  let args = ['restore'];
  spawn('dotnet', args, {
    stdio: 'inherit'
  }).on('exit', callback);
}

module.exports = {
  restore: restore
};
