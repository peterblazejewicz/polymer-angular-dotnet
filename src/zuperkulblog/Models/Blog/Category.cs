using System.Collections.Generic;
using Newtonsoft.Json;

namespace ZuperKulBlog.Models.Blog
{
    public class Category
    {
        [JsonProperty("items")]
        public IEnumerable<Article> Articles { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
    }
}
