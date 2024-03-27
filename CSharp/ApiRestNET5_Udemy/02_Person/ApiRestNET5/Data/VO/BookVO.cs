using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ApiRestNET5.Data.VO
{
	public class BookVO
	{
		//[JsonPropertyName("name_custom_id")]
		public int Id { get; set; }
		public string Author { get; set; }
		public DateTime LaunchDate { get; set; }
		public decimal Price { get; set; }
		//[JsonIgnore] //Ignore in serialization
		public string Title { get; set; }
	}
}
