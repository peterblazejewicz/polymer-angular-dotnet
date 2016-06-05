'use strict';
//
const fs = require('fs');
const path = require('path');
const HOSTING_CONFIG = 'hosting.json';
//
let read = () => {
  var config = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), HOSTING_CONFIG)));
  return config;
}

module.exports = {
  read: read
};
