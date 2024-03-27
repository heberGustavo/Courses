using Microsoft.AspNetCore.Mvc.Filters;

namespace ApiRestNET5.Hypermedia.Abstract
{
	public interface IResponseEnricher
	{
		bool CanEnrich(ResultExecutingContext context);
		Task Enrich(ResultExecutingContext context);
	}
}
