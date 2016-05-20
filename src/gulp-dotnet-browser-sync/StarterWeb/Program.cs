using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace StarterWeb
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var urls = Environment
          .GetEnvironmentVariable("ASPNETCORE_URLS") ?? "http://localhost:5000";
            var host = new WebHostBuilder()
                .UseUrls(urls)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
