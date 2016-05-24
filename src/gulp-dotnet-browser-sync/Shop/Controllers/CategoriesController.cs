using Microsoft.AspNetCore.Mvc;

namespace Shop.Controllers
{
    [Route("api/categories")]
    public class CategoriesController : Controller
    {

        // GET api/categories/{id}
        [HttpGet("{id}")]
        public string Get(string id)
        {
            return "value";
        }

    }
}
