using ApiRestNET5.Business;
using ApiRestNET5.Data.VO;
using ApiRestNET5.Hypermedia.Filters;
using ApiRestNET5.Model;
using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiRestNET5.Controllers
{
	[ApiVersion("1")]
	[Route("api/[controller]/v{version:apiVersion}")]
	[ApiController]
	public class BookController : ControllerBase
	{
		private readonly IBookBusiness _bookBusiness;

		public BookController(IBookBusiness bookBusiness)
		{
			_bookBusiness = bookBusiness;
		}

		[HttpGet]
		[ProducesResponseType((200), Type = typeof(List<BookVO>))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult FindAll()
		{
			return Ok(_bookBusiness.FindAll());
		}

		[HttpGet("{id}")]
		[ProducesResponseType((200), Type = typeof(BookVO))]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]

		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult FindById(int id)
		{
			var book = _bookBusiness.FindById(id);
			if (book == null) return NotFound();

			return Ok(book);
		}

		[HttpPost]
		[ProducesResponseType((200), Type = typeof(BookVO))]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Create([FromBody] BookVO model)
		{
			var book = _bookBusiness.Create(model);
			if (book == null) return BadRequest();

			return Ok(book);
		}

		[HttpPut]
		[ProducesResponseType((200), Type = typeof(BookVO))]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		[TypeFilter(typeof(HyperMediaFilter))]
		public IActionResult Update([FromBody] BookVO model)
		{
			var book = _bookBusiness.Update(model);

			if (book == null) return BadRequest();
			return Ok(book);
		}

		[HttpDelete("{id}")]
		[ProducesResponseType(204)]
		[ProducesResponseType(400)]
		[ProducesResponseType(401)]
		public IActionResult Delete(int id) 
		{ 
			if(id <= 0) return NotFound();
			_bookBusiness.Delete(id);

			return NoContent();
		}
	}
}
