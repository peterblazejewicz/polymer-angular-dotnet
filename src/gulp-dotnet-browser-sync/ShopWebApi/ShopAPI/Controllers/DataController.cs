using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShopAPI.Controllers
{
    [Route("api/data")]
    public class DataController : Controller
    {
        // GET api/data/{file}
        [HttpGet("{file}")]
        public IActionResult Get(string file)
        {
            try
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(),
            "Data", file);
                using (StreamReader stream = System.IO.File.OpenText(path))
                using (JsonTextReader reader = new JsonTextReader(stream))
                {
                    JArray data = (JArray)JToken.ReadFrom(reader);
                    if(data != null) return new ObjectResult(data);
                }
            }
            catch (System.Exception ex)
            {
                return NotFound(ex.Message);
            }
            return NotFound();
        }
    }
}
