using Newtonsoft.Json;

namespace ZuperKulBlog.Models.Blog
{
    public class Article
    {
        
        public int Id { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public string Date { get; set; }
        [JsonProperty("desc")]
        public string Description { get; set; }
        public string Image { get; set; }
        public string PrimaryColor { get; set; }
        public string SecondaryColor { get; set; }
        public string Title { get; set; }
    }
}
