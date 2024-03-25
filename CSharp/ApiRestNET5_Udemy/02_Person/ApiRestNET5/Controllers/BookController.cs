using ApiRestNET5.Business;
using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiVersion("1")]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiController]
	public class BookController : ControllerBase
	{
		private readonly IBookBusiness _bookBusiness;

		public BookController(IBookBusiness bookBusiness)
		{
			_bookBusiness = bookBusiness;
		}

		[HttpGet]
		public IActionResult FindAll()
		{
			return Ok(_bookBusiness.FindAll());
		}
	}
}
