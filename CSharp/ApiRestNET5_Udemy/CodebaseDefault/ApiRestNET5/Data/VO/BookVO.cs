using ApiRestNET5.Hypermedia;
using ApiRestNET5.Hypermedia.Abstract;

namespace ApiRestNET5.Data.VO
{
	public class BookVO : ISupportHyperMedia
	{
		//[JsonPropertyName("name_custom_id")]
		public int Id { get; set; }
		public string Author { get; set; }
		public DateTime LaunchDate { get; set; }
		public decimal Price { get; set; }
		//[JsonIgnore] //Ignore in serialization
		public string Title { get; set; }
		public List<HyperMediaLink> Links { get; set; } = new List<HyperMediaLink>();
	}
}
