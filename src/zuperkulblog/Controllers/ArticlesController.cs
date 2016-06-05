using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace ZuperKulBlog.Controllers
{
    [Route("api/articles")]
    public class ArticlesController : Controller
    {
        public IHostingEnvironment HostingEnvironment { get; set; }
        public ArticlesController(IHostingEnvironment env)
        {
            HostingEnvironment = env;
        }
        // GET api/values
        [HttpGet]
        public object Get()
        {
            string directory = Path.Combine(HostingEnvironment.WebRootPath, "data", "articles.json");
            return directory;
        }

    }
}
