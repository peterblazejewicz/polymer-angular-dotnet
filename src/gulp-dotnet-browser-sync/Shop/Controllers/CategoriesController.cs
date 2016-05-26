using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

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

        // GET api/categories/{id}
        [HttpGet("{id}")]
        public string Get(string id)
        {
            return "tbd";
        }

    }
}
