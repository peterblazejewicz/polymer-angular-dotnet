using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ExampleApp.Controllers
{
    [Route("api/cards")]
    public class CardsController : Controller
    {
        // GET api/cards/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            string json = $@"{{
                id: '{id}',
                title: 'View {id}',
                content: 'Ut labores minimum atomorum pro. Laudem tibique ut has.\n
      Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.'
            }}";
            JObject obj = JObject.Parse(json);
            return Ok(obj);
        }

    }
}
