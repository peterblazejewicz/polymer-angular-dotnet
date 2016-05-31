using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace PolymerKestrelAuth0.Controllers
{
    public class TestController : Controller
    {
        // GET api/ping
        [HttpGet]
        [Route("api/ping")]
        public object Ping()
        {
            return new
            {
                message = "Pong. You accessed an unprotected endpoint."
            };
        }

        // GET api/secured/ping
        [HttpGet]
        [Authorize(ActiveAuthenticationSchemes = "Bearer")]
        [Route("api/secured/ping")]
        public object SecuredPing()
        {
            return new
            {
                message = "Pong. You accessed a protected endpoint.",
                claims = User.Claims
                    .Select(c => new
                    {
                        c.Type,
                        c.Value
                    })
            };
        }

    }
}
