using ApiRestNET5.Business;
using ApiRestNET5.Model;
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

		[HttpPost]
		public IActionResult Create([FromBody] Book model)
		{
			if(model == null) return BadRequest("Invalid model");

			var book = _bookBusiness.Create(model);
			if (book == null) return BadRequest("Error to create Book");

			return Ok(book);
		}
	}
}
