using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using ZuperKulBlog.Models.Blog;

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
        // GET api/articles
        [HttpGet]
        public object Get()
        {
            string path = Path.Combine(HostingEnvironment.WebRootPath, "data", "articles.json");
            if (System.IO.File.Exists(path) == false)
            {
                return NotFound("Can't find backing data file");
            }
            IEnumerable<Category> categories = JsonConvert.DeserializeObject<IEnumerable<Category>>(System.IO.File.ReadAllText(path));
            return categories;
        }

        // GET api/articles/{category}
        /// <summary>
        /// Get article for given category and id
        /// </summary>
        /// <param name=""{category:alpha}/{id:int}""></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{category:alpha}/{id:int}")]
        public object GetArticle(string category, int id)
        {
            string path = Path.Combine(HostingEnvironment.WebRootPath, "data", "articles.json");
            if (System.IO.File.Exists(path) == false)
            {
                return NotFound("Can't find backing data file");
            }
            IEnumerable<Category> categories = JsonConvert.DeserializeObject<IEnumerable<Category>>(System.IO.File.ReadAllText(path));
            Category match = categories
                .Where(c => c.Name.Equals(category, StringComparison.CurrentCultureIgnoreCase))
                .First();
            if(match == null) return NotFound();
            if(match.Articles == null) return NotFound();
            var article = match.Articles
                .Where(a => a.Id == id).First();
            if(article == null) return NotFound();
            return article;
        }

    }
}
