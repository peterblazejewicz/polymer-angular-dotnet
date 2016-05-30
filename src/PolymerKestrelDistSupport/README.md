# Polymer with C# WebAPI hosted on Kestrel

## Deployment

```
gulp build
[22:59:56] Using gulpfile ~/git/recipes/src/PolymerKestrelDistSupport/gulpfile.js
[22:59:56] Starting 'build'...
[22:59:56] Starting 'clean'...
[22:59:56] Starting 'clean:dist'...
[22:59:56] Starting 'clean:build'...
[22:59:56] Starting 'clean:publish'...
[22:59:56] Finished 'clean:build' after 6.71 ms
[22:59:56] Finished 'clean:dist' after 17 ms
[22:59:56] Finished 'clean:publish' after 227 ms
[22:59:56] Finished 'clean' after 234 ms
[22:59:56] Starting 'polymer:build'...
info:    Building application...
info:    Generating build/unbundled...
info:    Generating build/bundled...
warn:    Unable to uglify file /Users/piotrblazejewicz/git/recipes/src/PolymerKestrelDistSupport/app/bower_components/web-component-tester/data/index.html_script_0.js
warn:    Unable to uglify file /Users/piotrblazejewicz/git/recipes/src/PolymerKestrelDistSupport/app/bower_components/web-component-tester/data/index.html_script_2.js
info:    Generating service workers...
info:    Build complete!
[23:00:26] Finished 'polymer:build' after 30 s
[23:00:26] Starting 'copy:dist'...
[23:00:26] Finished 'copy:dist' after 46 ms
[23:00:26] Starting 'clean:build'...
[23:00:27] Finished 'clean:build' after 262 ms
[23:00:27] Starting 'hosting:dist'...
[23:00:27] Finished 'hosting:dist' after 10 ms
[23:00:27] Starting 'dotnet:build'...
Project PolymerKestrelDistSupport (.NETCoreApp,Version=v1.0) will be compiled because expected outputs are missing
Compiling PolymerKestrelDistSupport for .NETCoreApp,Version=v1.0

Compilation succeeded.
    0 Warning(s)
    0 Error(s)

Time elapsed 00:00:06.1228721
 

[23:00:36] Finished 'dotnet:build' after 9.88 s
[23:00:36] Starting 'dotnet:publish'...
Publishing PolymerKestrelDistSupport for .NETCoreApp,Version=v1.0
Project PolymerKestrelDistSupport (.NETCoreApp,Version=v1.0) was previously compiled. Skipping compilation.
Configuring the following project for use with IIS: '/Users/piotrblazejewicz/git/recipes/src/PolymerKestrelDistSupport/bin/Debug/netcoreapp1.0/publish'
Updating web.config at '/Users/piotrblazejewicz/git/recipes/src/PolymerKestrelDistSupport/bin/Debug/netcoreapp1.0/publish/web.config'
Configuring project completed successfully
publish: Published to /Users/piotrblazejewicz/git/recipes/src/PolymerKestrelDistSupport/bin/Debug/netcoreapp1.0/publish
Published 1/1 projects successfully
[23:00:51] Finished 'dotnet:publish' after 14 s
[23:00:51] Finished 'build' after 55 s
```

## Author
@peterblazejewicz
