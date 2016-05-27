using IOFile = System.IO.File;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;

namespace Shop.Controllers
{
    [Route("api/categories")]
    public class CategoriesController : Controller
    {
        public IHostingEnvironment HostingEnvironment { get; set; }
        public CategoriesController(IHostingEnvironment env)
        {
            HostingEnvironment = env;
        }

        // GET api/categories/
        [HttpGet(Name = "GetCategories")]
        public IActionResult Get()
        {
            string path = Path.Combine(HostingEnvironment.ContentRootPath, "Data", "categories.json");
            if (IOFile.Exists(path) == false)
            {
                return NotFound($"The data file at {path} not found");
            }
            using (StreamReader stream = IOFile.OpenText(path))
            {
                using (JsonTextReader reader = new JsonTextReader(stream))
                {
                    JArray results = (JArray)JToken.ReadFrom(reader);
                    return Ok(results);
                }
            }
        }

        // GET api/categories/{filename}
        [HttpGet("{filename}", Name = "GetCategory")]
        public IActionResult Get(string filename)
        {
            string path = Path.Combine(HostingEnvironment.ContentRootPath, "Data", filename);
            if (IOFile.Exists(path) == false)
            {
                return NotFound($"The data file at {filename} not found");
            }
            using (StreamReader stream = IOFile.OpenText(path))
            {
                using (JsonTextReader reader = new JsonTextReader(stream))
                {
                    JArray results = (JArray)JToken.ReadFrom(reader);
                    return Ok(results);
                }
            }
        }

    }
}
