# Polymer + C# WebAPI (ASP.NET Core)

These are early stages of example Polymer (SHOP) application that uses C# WebAPI

## Development

```
gulp serve
[21:53:22] Using gulpfile ~/git/recipes/src/gulp-dotnet-browser-sync/ShopWebApi/gulpfile.js
[21:53:22] Starting 'serve:api'...
[21:53:22] Starting 'serve:polymer'...
[HPM] Proxy created: [ '/data/*.json' ]  ->  http://localhost:5000
[HPM] Proxy rewrite rule created: "^/data" ~> "/api/data"
[DotNetWatcher] info: Running dotnet with the following arguments: run
[DotNetWatcher] info: dotnet process id: 25627
Starting Polyserve...
    serving on port: 8080
    from root: /Users/piotrblazejewicz/git/recipes/src/gulp-dotnet-browser-sync/ShopWebApi/ShopWeb
  
Files in this directory are available under the following URLs
    applications: http://localhost:8080
    reusable components: http://localhost:8080/components/SHOP/
Project ShopAPI (.NETCoreApp,Version=v1.0) was previously compiled. Skipping compilation.
Hosting environment: Production
Content root path: /Users/piotrblazejewicz/git/recipes/src/gulp-dotnet-browser-sync/ShopWebApi/ShopAPI
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
[BS] Proxying: http://localhost:8080
[BS] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.18:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.18:3001
 -------------------------------------
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET http://localhost:5000/api/data/ladies_outerwear.json  
info: Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker[1]
      Executing action method ShopAPI.Controllers.DataController.Get (ShopAPI) with arguments (ladies_outerwear.json) - ModelState is Valid'
...
```

## Author

@peterblazejewicz