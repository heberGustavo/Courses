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

		[HttpGet("{id}")]
		public IActionResult FindById(int id)
		{
			var book = _bookBusiness.FindById(id);
			if (book == null) return NotFound();
			
			return Ok(book);
		}
	}
}
