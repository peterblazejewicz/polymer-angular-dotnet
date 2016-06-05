using Microsoft.AspNetCore.Mvc;

namespace StarterWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
