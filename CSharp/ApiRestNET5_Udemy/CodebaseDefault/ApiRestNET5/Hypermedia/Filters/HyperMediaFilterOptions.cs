using ApiRestNET5.Hypermedia.Abstract;

namespace ApiRestNET5.Hypermedia.Filters
{
	public class HyperMediaFilterOptions
	{
		public List<IResponseEnricher> ContentResponseEnricherList { get; set; } = new List<IResponseEnricher>();
	}
}
