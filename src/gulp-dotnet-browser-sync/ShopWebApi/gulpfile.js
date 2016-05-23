'use strict';

const browserSync = require('browser-sync');
const fs = require('fs');
const gulp = require('gulp-help')(require('gulp'));
const opn = require('opn');
const path = require('path');
const spawn = require('child_process').spawn;
const proxy = require('http-proxy-middleware');

gulp.task('serve:api', false, (cb) => {
    let args = ['watch'];
    let dotnet = spawn('dotnet', args, {
        stdio: 'inherit',
        cwd: path.join(process.cwd(), 'ShopAPI')
    }).on('exit', cb);    
});
gulp.task('serve:polymer', false, (cb) => {
    let args = ['serve'];
    let polymer = spawn('polymer', args, {
        stdio: 'inherit',
        cwd: path.join(process.cwd(), 'ShopWeb')
    });
    browserSync.emitter.on('service:exit', cb);
    let proxyOptions = {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
            '^/data': '/api/data'
        }
    }
    browserSync.init({
        notify: false,
        open: false,
        port: 3000,
        proxy: {
            target: 'localhost:8080',
            middleware: [proxy(['/data/*.json'], proxyOptions)]
        }
    });
    setTimeout(opn.bind(null, 'http://localhost:3000', null, null), 5000);
});

gulp.task('serve', 'Start local application', ['serve:api', 'serve:polymer'], (cb) => {
    
});